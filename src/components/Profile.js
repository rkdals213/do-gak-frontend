import React, {useEffect, useState} from "react"
import axios from "axios"

const Profile = () => {
    const [user_id, setUserId] = useState()
    const [nickName, setNickName] = useState()
    const [email, setEmail] = useState()

    const backendUrl = process.env.REACT_APP_BACK_API_URL

    const profile = () => {
        return window.Kakao.API.request({
            url: "/v2/user/me"
        })
    }

    const getToken = () => {
        profile().then(data => {
            axios.post(
                backendUrl + "/session/login",
                {
                    "email": data.kakao_account.email,
                    "name": data.properties.nickname
                },
                {
                    withCredentials: true
                }
            ).then(() => {
                setUserId(data.id)
                setNickName(data.properties.nickname)
                setEmail(data.kakao_account.email)
            })
        })

    }

    useEffect(() => {
        getToken()
    }, [])


    return (
        <div>
            <h2>{user_id}</h2>
            <h2>{nickName}</h2>
            <h2>{email}</h2>
        </div>
    )
}

export default Profile