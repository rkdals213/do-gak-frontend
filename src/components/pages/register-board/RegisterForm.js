import Form from "../../form/Form/Form"
import MessageTextInput from "../../@common/MessageTextInput/MessageTextInput"
import {REGISTER_BOARD_FORM, REGISTER_PRODUCT_FORM, REGISTER_PURCHASE_TIME} from "../../../hooks/useRegisterBoardForm"
import MessageTextarea from "../../@common/MessageTextarea/MessageTextarea"
import Button from "../../@common/button/Button"
import Label from "../../@common/Label/Label"
import styles from "./BoardForms.module.css"

const RegisterForm = ({handleSubmit, boardForm, handleChanges}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <MessageTextInput
                name={"title"}
                type={"text"}
                value={boardForm.title}
                onChange={handleChanges[REGISTER_BOARD_FORM.TITLE]}
                placeholder={"제목을 입력하세요"}
                label={"제목"}
                required={true}
            />
            <MessageTextInput
                name={"category"}
                type={"text"}
                value={boardForm.category}
                onChange={handleChanges[REGISTER_BOARD_FORM.CATEGORY]}
                placeholder={"카테고리를 입력하세요"}
                label={"카테고리"}
                required={true}
            />
            <MessageTextarea
                name={"content"}
                type={"text"}
                value={boardForm.content}
                placeholder={"본문을 입력하세요"}
                onChange={handleChanges[REGISTER_BOARD_FORM.CONTENT]}
                label={"본문"}
                required={true}
            />
            <MessageTextInput
                name={"product-name"}
                type={"text"}
                value={boardForm.productInfo.name}
                placeholder={"상품이름을 입력하세요"}
                onChange={handleChanges[REGISTER_BOARD_FORM.PRODUCT_INFO][REGISTER_PRODUCT_FORM.NAME]}
                label={"제품명"}
                required={true}
            />
            <MessageTextInput
                name={"product-price"}
                type={"number"}
                value={boardForm.productInfo.price.toString()}
                onChange={handleChanges[REGISTER_BOARD_FORM.PRODUCT_INFO][REGISTER_PRODUCT_FORM.PRICE]}
                label={"가격"}
                required={true}
            />
            <MessageTextInput
                name={"purchase-year"}
                type={"number"}
                value={boardForm.productInfo.purchaseTime.year.toString()}
                onChange={handleChanges[REGISTER_BOARD_FORM.PRODUCT_INFO][REGISTER_PRODUCT_FORM.PURCHASE_TIME][REGISTER_PURCHASE_TIME.YEAR]}
                label={"구매년도"}
                required={true}
            />
            <MessageTextInput
                name={"purchase-month"}
                type={"text"}
                value={boardForm.productInfo.purchaseTime.month}
                onChange={handleChanges[REGISTER_BOARD_FORM.PRODUCT_INFO][REGISTER_PRODUCT_FORM.PURCHASE_TIME][REGISTER_PURCHASE_TIME.MONTH]}
                label={"구매월"}
                required={true}
            />
            <Button type={"submit"}>제출</Button>
        </Form>
    )
}

export default RegisterForm