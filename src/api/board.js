import axios from "axios";
import {headers} from "./api"

const backendUrl = process.env.REACT_APP_BACK_API_URL
const COMMON_PATH = backendUrl + "/board"

export const fetchBoard = (page, category) =>
    axios.get(`${COMMON_PATH}`, {
        params: {
            size: 5,
            page: page,
            category: category
        }
    })

export const fetchBoardDetail = (token, boardId) =>
    axios.get(`${COMMON_PATH}/${boardId}`, headers({token}))

export const registerBoard = (token, boardData) =>
    axios.post(`${COMMON_PATH}`, boardData, headers({token}))

export const updateBoard = (token, boardId, boardData) =>
    axios.put(`${COMMON_PATH}/boardId/${boardId}`, boardData, headers({token}))
