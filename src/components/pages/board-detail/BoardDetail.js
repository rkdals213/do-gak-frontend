import {Link, useLocation, useNavigate} from "react-router-dom"
import * as Api from "../../../api"
import {useEffect, useState} from "react"
import {PATH} from "../../../constants/path"
import {generateQuery} from "../../../utils/query"
import styles from "./BoardDetail.module.css"
import Container from "../../@common/Container/Container"
import ProductInfo from "../../@common/product-info/ProductInfo"

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
        <Container className={styles["board-detail-box"]}>
            <div className={styles.box}>
                {board && (
                    <div>
                        <div className={styles.title}>
                            <h2>
                                {board.id} / {board.title} / {board.writerName}
                            </h2>
                        </div>
                        <div>{board.content}</div>
                        <ProductInfo productInfo={board.productInfo}>

                        </ProductInfo>
                        <Link
                            to={{
                                pathname: PATH.BOARD_UPDATE,
                                search: generateQuery({boardId: board.id})
                            }}>
                            <button>수정</button>
                        </Link>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default BoardDetail