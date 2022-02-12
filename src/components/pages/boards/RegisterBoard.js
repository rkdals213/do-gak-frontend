import useRegisterBoardForm, {REGISTER_BOARD_FORM, REGISTER_PRODUCT_FORM, REGISTER_PURCHASE_TIME} from "../../../hooks/useRegisterBoardForm"
import * as Api from "../../../api"
import useTokenContext from "../../../hooks/useTokenContext"
import {useNavigate} from "react-router-dom"
import {PATH} from "../../../constants/path"
import {generateQuery} from "../../../utils/query"

const RegisterBoard = () => {
    const {token} = useTokenContext()
    const {boardForm, handleChanges} = useRegisterBoardForm()
    const navigate = useNavigate()

    const registerBoard = async (form) => {
        try {
            await Api.registerBoard(token, form).then((response) => {
                navigate({
                    pathname: PATH.BOARD_DETAIL,
                    search: generateQuery({boardId: response.data})
                },{
                    replace: true
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        registerBoard(boardForm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    value={boardForm.title}
                    placeholder={"제목을 입력하세요"}
                    onChange={handleChanges[REGISTER_BOARD_FORM.TITLE]}
                /><br/>
                <input
                    type={"text"}
                    value={boardForm.content}
                    placeholder={"본문을 입력하세요"}
                    onChange={handleChanges[REGISTER_BOARD_FORM.CONTENT]}
                /><br/>
                <input
                    type={"text"}
                    value={boardForm.productInfo.name}
                    placeholder={"상품이름을 입력하세요"}
                    onChange={handleChanges[REGISTER_BOARD_FORM.PRODUCT_INFO][REGISTER_PRODUCT_FORM.NAME]}
                /><br/>
                <input
                    type={"number"}
                    value={boardForm.productInfo.price}
                    onChange={handleChanges[REGISTER_BOARD_FORM.PRODUCT_INFO][REGISTER_PRODUCT_FORM.PRICE]}
                /><br/>
                <input
                    type={"number"}
                    value={boardForm.productInfo.purchaseTime.year}
                    onChange={handleChanges[REGISTER_BOARD_FORM.PRODUCT_INFO][REGISTER_PRODUCT_FORM.PURCHASE_TIME][REGISTER_PURCHASE_TIME.YEAR]}
                /><br/>
                <input
                    type={"text"}
                    value={boardForm.productInfo.purchaseTime.month}
                    onChange={handleChanges[REGISTER_BOARD_FORM.PRODUCT_INFO][REGISTER_PRODUCT_FORM.PURCHASE_TIME][REGISTER_PURCHASE_TIME.MONTH]}
                /><br/>
                <button type={"submit"}>제출</button>
            </form>
        </div>
    )
}

export default RegisterBoard