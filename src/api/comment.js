import axios from "axios";
import {headers} from "./api"

const backendUrl = process.env.REACT_APP_BACK_API_URL
const COMMON_PATH = backendUrl + "/comment"

export const fetchCommentOfBoard = (token, boardId) =>
    axios.get(`${COMMON_PATH}/board/${boardId}`, headers({token}))

export const postComment = (token, boardId, commentData) =>
    axios.post(`${COMMON_PATH}/board/${boardId}`, commentData, headers({token}))

export const updateComment = (token, commentId, commentData) =>
    axios.patch(`${COMMON_PATH}/${commentId}`, commentData, headers({token}))