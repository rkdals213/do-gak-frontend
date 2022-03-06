import axios from "axios";
import {headers} from "./api"

const backendUrl = process.env.REACT_APP_BACK_API_URL
const COMMON_PATH = backendUrl + "/comment"

export const fetchCommentOfBoard = (token, boardId) =>
    axios.get(`${COMMON_PATH}/board/${boardId}`, headers({token}))
