import axios from "axios";

const backendUrl = process.env.REACT_APP_BACK_API_URL
const COMMON_PATH = backendUrl + "/session"

export const fetchRegister = (
    {
        name,
        email,
        phoneNumber,
        gender,
        birthday,
        password,
        confirmPassword,
        authenticationCode,
    }
) =>
    axios.post(`${COMMON_PATH}/register`, {
        name,
        email,
        phoneNumber,
        gender,
        // birthday: formatDate(birthday),
        password,
        confirmPassword,
        authenticationCode,
    })

export const fetchLogin = ({email, name}) =>
    axios.post(`${COMMON_PATH}/login`,
        {email, name},
        {withCredentials: true}
    )