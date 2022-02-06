import {useLocation} from "react-router-dom"

const BoardDetail = () => {
    const query = new URLSearchParams(useLocation().search)
    const data = query.get("boardId")
    console.log(data)

    return (
        <div>
            BOARD DETAIL
        </div>
    )
}

export default BoardDetail