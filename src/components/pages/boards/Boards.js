import * as Api from "../../../api"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {generateQuery} from "../../../utils/query"
import {PATH} from "../../../constants/path"

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
                            <Link
                                to={{
                                    pathname: PATH.BOARD_DETAIL,
                                    search: generateQuery({boardId: id})
                                }}>
                                {id} {title}
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