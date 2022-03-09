import React from "react"
import {Link} from "react-router-dom"
import useTokenContext from "../../hooks/useTokenContext"
import {PATH, URL} from "../../constants/path"
import Button from "../@common/button/Button"
import styles from "./Header.module.css"
import headerLogo from "../../assets/Header.jpeg"
import useBeforeLoginPageContext from "../../hooks/useBeforeLoginPageContext"

const Header = () => {
    const {token, resetToken} = useTokenContext()
    const {setRedirectPage} = useBeforeLoginPageContext()

    const onLogin = async () => {
        const page = window.location.pathname + window.location.search
        setRedirectPage(page)
        window.location.replace(URL.KAKAO_AUTH_URL)
    }

    const onLogout = () => {
        resetToken()
        window.location.reload()
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