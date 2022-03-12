import axios from "axios";

const backendUrl = process.env.REACT_APP_BACK_API_URL
const COMMON_PATH = backendUrl + "/session"

export const login = ({accessToken}) =>
    axios.post(`${COMMON_PATH}/login`,
        {accessToken},
        {withCredentials: true}
    )