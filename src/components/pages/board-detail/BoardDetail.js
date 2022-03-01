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
import useTokenContext from "../../../hooks/useTokenContext"

const BoardDetail = () => {
    const query = new URLSearchParams(useLocation().search)
    const boardId = query.get("boardId")

    const {token} = useTokenContext()
    const [board, setBoard] = useState()
    const [isWriter, setIsWriter] = useState(false)

    const getBoardDetail = async () => {
        const response = await Api.fetchBoardDetail(token, boardId)

        setBoard(response.data)
        setIsWriter(response.data.isWriter)
    }

    useEffect(
        getBoardDetail
        , []
    )

    return (
        <>
            {board && (
                <Container className={styles["board-detail-box"]}>
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
                </Container>
            )}
        </>
    )
}

export default BoardDetail