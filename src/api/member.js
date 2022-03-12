import axios from "axios";
import {headers} from "./api"

const backendUrl = process.env.REACT_APP_BACK_API_URL
const COMMON_PATH = backendUrl + "/member"

export const fetchMemberInfo = (token) =>
    axios.get(`${COMMON_PATH}/myInfo`, headers({token}))

