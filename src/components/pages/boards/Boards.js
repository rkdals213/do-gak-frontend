import * as Api from "../../../api"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {generateQuery} from "../../../utils/query"
import {PATH} from "../../../constants/path"
import {useInView} from "react-intersection-observer"

const Boards = () => {
    const [boards, setBoards] = useState([])
    const [isLastPage, setIsLastPage] = useState(false)
    const [page, setPage] = useState(0)
    const [ref, inView] = useInView()
    const [loading, setLoading] = useState(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getBoards = async () => {
        setLoading(true)
        const response = await Api.fetchBoard(page)
        const content = response.data.content
        const mergedContent = boards.concat(...content)

        setBoards(mergedContent)
        setIsLastPage(response.data.last)
        setLoading(false)
    }

    useEffect(getBoards, [page])

    useEffect(() => {
        if (inView && !loading && !isLastPage) {
            setPage(prevState => prevState + 1)
        }
    }, [inView, loading])

    return (
        <div>
            <h1>BOARD</h1>
            {boards ? (
                <div>
                    <Link
                        to={{
                            pathname: PATH.BOARD_REGISTER
                        }}>
                        글쓰기
                    </Link>
                    <ul>
                        {boards.map(({id, title}) => (
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
                    <div ref={ref}/>
                </div>
            ) : (
                <div ref={ref}/>
            )}
        </div>
    )
}

export default Boards