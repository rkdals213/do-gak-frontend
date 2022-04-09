import useTokenContext from '../../../hooks/useTokenContext'
import * as Api from '../../../api'
import { useEffect, useState } from 'react'
import Container from '../../@common/Container/Container'
import styles from './MyPage.module.css'
import Description from '../../@common/Description/Description'

const MyPage = () => {
  const [memberInfo, setMemberInfo] = useState()
  const { token } = useTokenContext()

  const getMemberInfo = async () => {
    const response = await Api.fetchMemberInfo(token)

    setMemberInfo(response.data)
  }

  useEffect(() => {
    getMemberInfo()
  }, [])

  return (
    <>
      {memberInfo && (
        <Container className={styles['my-page-box']}>
          <Description>닉네임</Description>
          {memberInfo.name}
          <Description>이메일</Description>
          {memberInfo.email}
        </Container>
      )}
    </>
  )
}

export default MyPage