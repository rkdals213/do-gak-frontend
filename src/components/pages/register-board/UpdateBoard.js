import useRegisterBoardForm from "../../../hooks/useRegisterBoardForm"
import * as Api from "../../../api"
import useTokenContext from "../../../hooks/useTokenContext"
import {useLocation, useNavigate} from "react-router-dom"
import {PATH} from "../../../constants/path"
import {generateQuery} from "../../../utils/query"
import {useEffect} from "react"
import RegisterForm from "./RegisterForm"
import styles from "./BoardForms.module.css"

const RegisterBoard = () => {
    const {token} = useTokenContext()
    const {boardForm, setBoardForm, handleChanges} = useRegisterBoardForm()
    const navigate = useNavigate()

    const query = new URLSearchParams(useLocation().search)
    const boardId = query.get("boardId")

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getBoardDetail = async () => {
        const response = await Api.fetchBoardDetail(boardId)

        setBoardForm(response.data)
    }

    const updateBoard = async (form) => {
        try {
            await Api.updateBoard(token, boardId, form).then((response) => {
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

        updateBoard(boardForm)
    }

    useEffect(
        getBoardDetail
        , []
    )

    return (
        <div className={styles.box}>
            <RegisterForm handleSubmit={handleSubmit} boardForm={boardForm} handleChanges={handleChanges}/>
        </div>
    )
}

export default RegisterBoard