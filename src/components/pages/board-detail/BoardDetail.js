import {Link, useLocation, useNavigate} from "react-router-dom"
import * as Api from "../../../api"
import {useEffect, useState} from "react"
import {PATH} from "../../../constants/path"
import {generateQuery} from "../../../utils/query"

const BoardDetail = () => {
    const query = new URLSearchParams(useLocation().search)
    const boardId = query.get("boardId")

    const [board, setBoard] = useState()

    const getBoardDetail = async () => {
        const response = await Api.fetchBoardDetail(boardId)

        setBoard(response.data)
    }

    useEffect(
        getBoardDetail
        , []
    )

    return (
        <div>
            {board ? (
                <div>
                    <div>
                        <h1>{board.id} / {board.title} / {board.writerName}</h1>
                        <h3>{board.content}</h3>
                        {board.productInfo.name} <br/>
                        {board.productInfo.price}원<br/>
                        {board.productInfo.purchaseTime.year}년 {board.productInfo.purchaseTime.month}월 <br/>
                        <Link
                            to={{
                                pathname: PATH.BOARD_UPDATE,
                                search: generateQuery({boardId: board.id})
                            }}>
                            <button>수정</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div/>
            )}
        </div>
    )
}

export default BoardDetail