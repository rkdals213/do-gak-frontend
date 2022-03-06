import classNames from "classnames"
import styles from "./BoardDetail.module.css"
import Description from "../../@common/Description/Description"
import Button from "../../@common/button/Button"

const CommentItem = ({comment, className, ...props}) => {
    console.log(comment)
    const id = comment.id
    const content = comment.content
    const writerId = comment.writerId
    const writerName = comment.writerName
    const isWriter = comment.isWriter
    const createAt = comment.createdAt
    const modifiedAt = comment.modifiedAt
    return (
        <div className={classNames(styles["content-wrapper"], className)} {...props}>
            <div className={styles["text-container"]}>
                <div className={styles["comment-content"]}>
                    <span>{writerName}</span>
                    <span>{content}</span>
                    {isWriter && (
                        <Button>수정</Button>
                    )}
                    <Description>등록일 : {createAt}</Description>
                    {createAt !== modifiedAt && (
                        <Description>수정일 : {modifiedAt}</Description>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CommentItem