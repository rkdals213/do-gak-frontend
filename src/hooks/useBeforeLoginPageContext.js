import { useContext, createContext } from 'react'

export const PageContext = createContext()

const useBeforeLoginPageContext = () => {
  const pageContext = useContext(PageContext)

  if (!pageContext) {
    console.log('error')
  }

  return pageContext
}

export default useBeforeLoginPageContext