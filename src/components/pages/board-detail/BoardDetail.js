import {Link, useLocation} from "react-router-dom"
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
import CommentItem from "./CommentItem"
import RegisterCommentForm from "./RegisterCommentForm"

const BoardDetail = () => {
    const query = new URLSearchParams(useLocation().search)
    const boardId = query.get("boardId")

    const {token} = useTokenContext()
    const [board, setBoard] = useState()
    const [comments, setComments] = useState([])
    const [isWriter, setIsWriter] = useState(false)
    const [writeComment, setWriteComment] = useState("")

    const getBoardDetail = async () => {
        const response = await Api.fetchBoardDetail(token, boardId)

        setBoard(response.data)
        setIsWriter(response.data.isWriter)
    }

    const getBoardComment = async () => {
        const response = await Api.fetchCommentOfBoard(token, boardId)

        setComments(response.data)
    }

    const registerComment = async () => {
        await Api.registerComment(token, boardId, {
            comment: writeComment
        }).then(() => {
            window.location.reload()
        })
    }

    const handleCommentChange = ({target}) => {
        setWriteComment(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        registerComment(writeComment)
    }

    useEffect(
        getBoardDetail
        , []
    )

    useEffect(
        getBoardComment
        , []
    )

    return (
        <>
            <div>
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
            </div>
            <div>
                {comments && (
                    <Container className={styles["comment-box"]}>
                        <div className={styles["comment-list"]}>
                            {comments.map((comment) => (
                                <CommentItem
                                    key={comment.id}
                                    comment={comment}
                                />
                            ))}
                            {token && (
                                <RegisterCommentForm
                                    handleSubmit={handleSubmit}
                                    writeComment={writeComment}
                                    handleCommentChange={handleCommentChange}
                                />
                            )}
                        </div>
                    </Container>
                )}
            </div>
        </>
    )
}

export default BoardDetail