import React, {useEffect} from "react"
import axios from "axios"
import qs from "qs"
import {useNavigate} from "react-router-dom"
import {PATH} from "../../constants/path"
import useAuth from "../../hooks/useAuth"

const KakaoCallback = () => {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI
    const CLIENT_SECRET = process.env.REACT_APP_KAKAO_CLIENT_SECRET
    const AUTH_TOKEN_URI = process.env.REACT_APP_KAKAO_TOKEN_URL

    const code = new URL(window.location.href).searchParams.get("code")

    const navigate = useNavigate()
    const { login } = useAuth()

    const getToken = async () => {
        const payload = qs.stringify({
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: code,
            client_secret: CLIENT_SECRET
        })

        try {
            const res = await axios.post(
                AUTH_TOKEN_URI,
                payload
            )

            await login({
                "accessToken": res.data.access_token
            })

            navigate(PATH.HOME)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getToken()
    }, [])

    return null
}

export default KakaoCallback