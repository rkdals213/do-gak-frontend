import classNames from "classnames"
import styles from "./BoardItem.module.css"

const BoardItem = ({board, onClickButton, className, ...props}) => {

    return (
        <div className={classNames(styles["content-wrapper"], className)} {...props} onClick={onClickButton}>
            <div className={styles["text-container"]}>
                <p className={styles.title}>
                    <strong>{board.title}</strong>
                </p>
            </div>
        </div>
    )
}

export default BoardItem