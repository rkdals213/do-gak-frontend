import styles from './BoardDetail.module.css'

const Content = ({ content }) => {
  return (
    <div className={styles.content}>
      {content}
    </div>
  )
}

export default Content