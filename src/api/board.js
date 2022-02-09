import axios from "axios";
import {headers} from "./api"

const backendUrl = process.env.REACT_APP_BACK_API_URL
const COMMON_PATH = backendUrl + "/board"

export const fetchBoard = () =>
    axios.get(`${COMMON_PATH}`)

export const fetchBoardDetail = (boardId) =>
    axios.get(`${COMMON_PATH}/${boardId}`)

export const registerBoard = (token, boardData) =>
    axios.post(`${COMMON_PATH}`, boardData, headers({token}))

export const updateBoard = (token, boardId, boardData) =>
    axios.put(`${COMMON_PATH}/boardId/${boardId}`, boardData, headers({token}))
