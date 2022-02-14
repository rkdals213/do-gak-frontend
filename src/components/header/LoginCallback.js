import React, {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const LoginCallback = () => {

    const navigate = useNavigate()

    const profile = () => {
        return window.Kakao.API.request({
            url: "/v2/user/me"
        })
    }

    const { login } = useAuth()

    const getToken = () => {
        profile().then(data => {
            login({
                "email": data.kakao_account.email,
                "name": data.properties.nickname
            }).then(() => {
                navigate("/")
            })
        })
    }

    useEffect(() => {
        getToken()
    }, [])

    return null
}

export default LoginCallback