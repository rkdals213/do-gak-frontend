import axios from "axios";

const backendUrl = process.env.REACT_APP_BACK_API_URL
const COMMON_PATH = backendUrl + "/board"


export const fetchBoard = () =>
    axios.get(`${COMMON_PATH}`)

export const fetchBoardDetail = (boardId) =>
    axios.get(`${COMMON_PATH}/${boardId}`)