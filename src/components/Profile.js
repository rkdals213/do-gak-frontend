import React, {useEffect, useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import useAuth from "./hooks/useAuth"

const Profile = () => {
    const [userName, setUserName] = useState("")

    const backendUrl = process.env.REACT_APP_BACK_API_URL
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
            }).then(r => {
                console.log(r)
            })
            // axios.post(
            //     backendUrl + "/session/login",
            //     {
            //         "email": data.kakao_account.email,
            //         "name": data.properties.nickname
            //     },
            //     {
            //         withCredentials: true
            //     }
            // ).then((res) => {
            //     axios.defaults.headers.common["Authorization"] = `Bearer ${res.data}`
            //     navigate("/")
            // })
        })

    }

    useEffect(() => {
        getToken()
    }, [])


    return null
}

export default Profile