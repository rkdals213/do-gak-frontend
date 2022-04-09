import useTokenContext from '../../hooks/useTokenContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const PrivateRoute = ({ children }) => {
  const { token } = useTokenContext()
  const navigate = useNavigate()

  const goBackIfNotCertified = () => {
    if (!token) {
      alert('로그인해야 합니다')
      navigate(-1)
    }
  }

  useEffect(
    goBackIfNotCertified
    , [],
  )

  return children
}

export default PrivateRoute