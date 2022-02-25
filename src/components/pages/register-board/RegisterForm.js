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
            <Label className={styles["text-bold"]} required>
                제목
            </Label>
            <MessageTextInput
                name={"title"}
                type={"text"}
                value={boardForm.title}
                onChange={handleChanges[REGISTER_BOARD_FORM.TITLE]}
                placeholder={"제목을 입력하세요"}
            />
            <Label className={styles["text-bold"]} required>
                카테고리
            </Label>
            <MessageTextInput
                name={"category"}
                type={"text"}
                value={boardForm.category}
                onChange={handleChanges[REGISTER_BOARD_FORM.CATEGORY]}
                placeholder={"카테고리를 입력하세요"}
            />
            <Label className={styles["text-bold"]} required>
                본문
            </Label>
            <MessageTextarea
                name={"content"}
                type={"text"}
                value={boardForm.content}
                placeholder={"본문을 입력하세요"}
                onChange={handleChanges[REGISTER_BOARD_FORM.CONTENT]}
            />
            <Label className={styles["text-bold"]} required>
                제품명
            </Label>
            <MessageTextInput
                name={"product-name"}
                type={"text"}
                value={boardForm.productInfo.name}
                placeholder={"상품이름을 입력하세요"}
                onChange={handleChanges[REGISTER_BOARD_FORM.PRODUCT_INFO][REGISTER_PRODUCT_FORM.NAME]}
            />
            <Label className={styles["text-bold"]} required>
                가격
            </Label>
            <MessageTextInput
                name={"product-price"}
                type={"number"}
                value={boardForm.productInfo.price.toString()}
                onChange={handleChanges[REGISTER_BOARD_FORM.PRODUCT_INFO][REGISTER_PRODUCT_FORM.PRICE]}
            />
            <Label className={styles["text-bold"]}>
                구매년도
            </Label>
            <MessageTextInput
                name={"purchase-year"}
                type={"number"}
                value={boardForm.productInfo.purchaseTime.year.toString()}
                onChange={handleChanges[REGISTER_BOARD_FORM.PRODUCT_INFO][REGISTER_PRODUCT_FORM.PURCHASE_TIME][REGISTER_PURCHASE_TIME.YEAR]}
            />
            <Label className={styles["text-bold"]}>
                구매월
            </Label>
            <MessageTextInput
                name={"purchase-month"}
                type={"text"}
                value={boardForm.productInfo.purchaseTime.month}
                onChange={handleChanges[REGISTER_BOARD_FORM.PRODUCT_INFO][REGISTER_PRODUCT_FORM.PURCHASE_TIME][REGISTER_PURCHASE_TIME.MONTH]}
            />
            <Button type={"submit"}>제출</Button>
        </Form>
    )
}

export default RegisterForm