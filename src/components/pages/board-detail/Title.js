import styles from './BoardDetail.module.css'

const Title = ({ board }) => {
  return (
    <div className={styles.title}>
      {board.id} / {board.title} / {board.writerName}
    </div>
  )
}

export default Title