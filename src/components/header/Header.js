import React from "react"
import {Link, useNavigate} from "react-router-dom"
import useTokenContext from "../../hooks/useTokenContext"
import {PATH, URL} from "../../constants/path"
import Button from "../@common/Button"
import styles from "./Header.module.css"
import headerLogo from "../../assets/Header.jpeg"

const Header = () => {
    const {token, resetToken} = useTokenContext()

    const navigate = useNavigate()

    const onLogin = () => {
        window.location.replace(URL.KAKAO_AUTH_URL)
    }

    const onLogout = () => {
        resetToken()
        navigate(PATH.HOME)
    }

    return (
        <div className={styles.box}>
            <header className={styles.header}>
                <div className={styles.content}>
                    <div className={styles.home}>
                        <h1>
                            <Link to={PATH.HOME}>
                                <img
                                    className={styles.logo}
                                    src={headerLogo}
                                    height={30}
                                    alt={"로고"}/>
                                도각도각
                            </Link>
                        </h1>
                    </div>
                    <div className={styles["link-container"]}>
                        {token ? (
                            <div className={styles["member-menu-container"]}>
                                <Button className={styles.button} onClick={onLogout}>Logout</Button>
                            </div>
                        ) : (
                            <div className={styles["member-menu-container"]}>
                                <Button className={styles.button} onClick={onLogin}>Login</Button>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header