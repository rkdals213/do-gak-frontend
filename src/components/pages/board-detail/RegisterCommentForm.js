import Form from "../../form/Form/Form"
import MessageTextInput from "../../@common/MessageTextInput/MessageTextInput"
import Button from "../../@common/button/Button"

const RegisterCommentForm = ({handleSubmit, writeComment, handleCommentChange}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <MessageTextInput
                name={"comment"}
                type={"text"}
                value={writeComment}
                onChange={handleCommentChange}
                placeholder={"댓글을 입력하세요"}
                label={"댓글"}
                required={true}
            />
            <Button type={"submit"}>제출</Button>
        </Form>
    )
}

export default RegisterCommentForm