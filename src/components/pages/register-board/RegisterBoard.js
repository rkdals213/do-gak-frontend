import useRegisterBoardForm from "../../../hooks/useRegisterBoardForm"
import * as Api from "../../../api"
import useTokenContext from "../../../hooks/useTokenContext"
import {useNavigate} from "react-router-dom"
import {PATH} from "../../../constants/path"
import {generateQuery} from "../../../utils/query"
import styles from "./BoardForms.module.css"
import RegisterForm from "./RegisterForm"

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
                }, {
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
        <div className={styles.box}>
            <RegisterForm handleSubmit={handleSubmit} boardForm={boardForm} handleChanges={handleChanges}>

            </RegisterForm>
        </div>
    )
}

export default RegisterBoard