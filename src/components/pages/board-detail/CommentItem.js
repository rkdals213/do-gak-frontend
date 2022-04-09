import classNames from "classnames"
import styles from "./BoardDetail.module.css"
import Description from "../../@common/Description/Description"
import Button from "../../@common/button/Button"
import {useState} from "react"
import RegisterCommentForm from "./RegisterCommentForm"
import * as Api from "../../../api"
import useTokenContext from "../../../hooks/useTokenContext"

const CommentItem = ({comment, className, ...props}) => {
    const id = comment.id
    const content = comment.content
    const writerId = comment.writerId
    const writerName = comment.writerName
    const isWriter = comment.isWriter
    const createAt = comment.createdAt
    const modifiedAt = comment.modifiedAt

    const [update, setUpdate] = useState(false)
    const [writeComment, setWriteComment] = useState(content)
    const {token} = useTokenContext()

    const handleUpdateButton = () => {
        setUpdate(!update)
    }

    const updateComment = async () => {
        await Api.updateComment(token, id, {
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

        updateComment(writeComment)
    }

    return (
        <div className={classNames(styles["content-wrapper"], className)} {...props}>
            <div className={styles["text-container"]}>
                <div className={styles['comment-content']}>
                    <div>{writerName}</div>
                    <div>{content}</div>
                    {isWriter && (
                        <Button onClick={handleUpdateButton}>수정</Button>
                    )}
                    <Description>등록일 : {createAt}</Description>
                    <Description>수정일 : {modifiedAt}</Description>
                </div>
                {update && (
                    <RegisterCommentForm
                        handleSubmit={handleSubmit}
                        writeComment={writeComment}
                        handleCommentChange={handleCommentChange}
                    />
                )}
            </div>
        </div>
    )
}

export default CommentItem