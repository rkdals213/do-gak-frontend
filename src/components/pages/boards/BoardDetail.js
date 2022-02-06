import {useLocation} from "react-router-dom"
import * as Api from "../../../api"
import {useEffect, useState} from "react"

const BoardDetail = () => {
    const query = new URLSearchParams(useLocation().search)
    const boardId = query.get("boardId")

    const [data, setData] = useState()

    const getBoardDetail = async () => {
        const response = await Api.fetchBoardDetail(boardId)

        setData(response.data)
    }

    useEffect(
        getBoardDetail
        , []
    )

    return (
        <div>
            {data ? (
                <div>
                    <div>
                        <h1>{data.id} / {data.title} / {data.writerName}</h1>
                        <h3>{data.content}</h3>
                        {data.productInfoResponse.name} <br/>
                        {data.productInfoResponse.price}원<br/>
                        {data.productInfoResponse.purchaseTime.year}년 {data.productInfoResponse.purchaseTime.month}월 <br/>
                    </div>
                </div>
            ) : (
                <div/>
            )}
        </div>
    )
}

export default BoardDetail