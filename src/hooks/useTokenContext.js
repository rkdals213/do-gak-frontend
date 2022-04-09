import { useContext, createContext } from 'react'

export const TokenContext = createContext()

const useTokenContext = () => {
  const tokenContext = useContext(TokenContext)

  if (!tokenContext) {
    console.log('error')
  }

  return tokenContext
}

export default useTokenContext