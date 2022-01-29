import React from "react"
import {useEffect} from "react"
import axios from "axios"
import qs from "qs"
import {useNavigate} from "react-router-dom"

const Auth = () => {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI
    const CLIENT_SECRET = process.env.REACT_APP_KAKAO_CLIENT_SECRET

    const code = new URL(window.location.href).searchParams.get("code")

    const navigate = useNavigate()

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
                "https://kauth.kakao.com/oauth/token",
                payload
            )

            window.Kakao.init(REST_API_KEY)
            window.Kakao.Auth.setAccessToken(res.data.access_token)
            navigate("/profile")
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getToken()
    }, [])

    return null
}

export default Auth