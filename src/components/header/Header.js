import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import useTokenContext from "../../hooks/useTokenContext"
import {PATH, URL} from "../../constants/path"
import Button from "../@common/Button"
import styles from "./Header.module.css"

const Header = () => {
    const {token, resetToken} = useTokenContext()

    const [isShowMemberMenu, setIsShowMemberMenu] = useState(false)
    const navigate = useNavigate()

    const onLogin = () => {
        setIsShowMemberMenu(true)
        window.location.replace(URL.KAKAO_AUTH_URL)
    }

    const onLogout = () => {
        setIsShowMemberMenu(false)
        resetToken()
        navigate(PATH.HOME)
    }

    return (
        <div>
            {token ? (
                <div className="App">
                    <h1>{token}</h1>
                    <Button className={styles.button} onClick={onLogout}>Logout</Button>
                </div>
            ) : (
                <div className="App">
                    <Button className={styles.button} onClick={onLogin}>Login</Button>
                </div>
            )}
        </div>
    )
}

export default Header