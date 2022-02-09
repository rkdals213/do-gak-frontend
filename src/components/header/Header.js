import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import useTokenContext from "../../hooks/useTokenContext"
import {PATH, URL} from "../../constants/path"

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
                    <button onClick={onLogout}>Logout</button>
                </div>
            ) : (
                <div className="App">
                    <button onClick={onLogin}>Login</button>
                </div>
            )}
        </div>
    )
}

export default Header