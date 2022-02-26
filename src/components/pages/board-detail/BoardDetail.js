import {Link, useLocation, useNavigate} from "react-router-dom"
import * as Api from "../../../api"
import {useEffect, useState} from "react"
import {PATH} from "../../../constants/path"
import {generateQuery} from "../../../utils/query"
import styles from "./BoardDetail.module.css"
import Container from "../../@common/Container/Container"
import ProductInfo from "./ProductInfo"
import Title from "./Title"
import Button from "../../@common/button/Button"
import Content from "./Content"

const BoardDetail = () => {
    const query = new URLSearchParams(useLocation().search)
    const boardId = query.get("boardId")

    const [board, setBoard] = useState()
    const [isWriter, setIsWriter] = useState(false)

    const getBoardDetail = async () => {
        const response = await Api.fetchBoardDetail(boardId)

        setBoard(response.data)
        setIsWriter(response.data.isWriter)
    }

    useEffect(
        getBoardDetail
        , []
    )

    return (
        <Container className={styles["board-detail-box"]}>
            <div className={styles.box}>
                {board && (
                    <div>
                        <Title board={board}/>
                        <ProductInfo productInfo={board.productInfo}/>
                        <Content content={board.content}/>
                        {isWriter && (
                            <Link
                                to={{
                                    pathname: PATH.BOARD_UPDATE,
                                    search: generateQuery({boardId: board.id})
                                }}>
                                <Button>수정</Button>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </Container>
    )
}

export default BoardDetail