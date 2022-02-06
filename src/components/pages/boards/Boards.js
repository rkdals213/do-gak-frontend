import * as Api from "../../../api"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {generateQuery} from "../../../utils/query"

const Boards = () => {
    const [data, setData] = useState()

    const getBoards = async () => {
        const response = await Api.fetchBoard()

        setData(response)
    }

    useEffect(
        getBoards
        , []
    )

    console.log(data)

    return (
        <div>
            <h1>BOARD</h1>
            {data ? (
                <ul>
                    {data.data.content.map(({id, title, content}) => (
                        <li key={id}>
                            {title}
                            <Link
                                to={{
                                    pathname: "/boardDetail",
                                    search: generateQuery({boardId: id})
                                }}>
                                {id}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>

                </div>
            )}
        </div>
    )
}

export default Boards