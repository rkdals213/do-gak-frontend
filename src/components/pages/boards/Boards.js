import * as Api from "../../../api"
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {generateQuery} from "../../../utils/query"
import {PATH} from "../../../constants/path"
import {useInView} from "react-intersection-observer"
import styles from "./Boards.module.css"
import {BOARD_CATEGORY_TAB, BOARD_CATEGORY_TAB_LIST} from "../../../constants/board"
import classNames from "classnames"
import BoardItem from "./BoardItem"

const Boards = () => {
    const [boards, setBoards] = useState([])
    const [isLastPage, setIsLastPage] = useState(false)
    const [page, setPage] = useState(0)
    const [ref, inView] = useInView()
    const [loading, setLoading] = useState(true)
    const [boardCategory, setBoardCategory] = useState(BOARD_CATEGORY_TAB.ALL.name)

    const navigate = useNavigate()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getBoards = async () => {
        setLoading(true)
        const response = await Api.fetchBoard(page, boardCategory)
        const content = response.data.content

        setBoards(prevState => prevState.concat(content))
        setIsLastPage(response.data.last)
        setLoading(false)
    }

    useEffect(getBoards, [page, boardCategory])

    useEffect(() => {
        if (inView && !loading && !isLastPage) {
            setPage(prevState => prevState + 1)
        }
    }, [inView, isLastPage, loading])

    const refreshCategory = (name) => {
        setBoardCategory(name)
        setBoards([])
        setPage(0)
    }

    const goToBoardDetail = (board) => {
        navigate({
            pathname: PATH.BOARD_DETAIL,
            search: generateQuery({boardId: board.id})
        })
    }

    return (
        <>
            <nav className={styles.tab}>
                <ul className={styles["tab-list"]}>
                    {BOARD_CATEGORY_TAB_LIST.map(({name, label}) => (
                        <li
                            key={name}
                            className={classNames(styles["tab-item"])}
                            onClick={() => {
                                refreshCategory(name)
                            }}
                        >
                            {label}
                        </li>
                    ))}
                    <li
                        key={"write"}
                        className={classNames(styles["tab-item"])}
                        onClick={() => navigate(PATH.BOARD_REGISTER)}
                    >
                        글쓰기
                    </li>
                </ul>
            </nav>
            <div className={styles["board-list-box"]}>
                <div className={styles["board-list"]}>
                    {boards.map((board) => (
                        <BoardItem
                            key={board.id}
                            board={board}
                            onClickButton={() => {
                                goToBoardDetail(board)
                            }}
                        />
                    ))}
                </div>
            </div>
            <div ref={ref}/>
        </>
    )
}

export default Boards