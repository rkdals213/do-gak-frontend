import { useState } from 'react'
import { PATH } from '../constants/path'
import { PageContext } from '../hooks/useBeforeLoginPageContext'
import { LOCAL_STORAGE_KEY } from '../constants/key'

const BeforeLoginPageProvider = ({ children }) => {
  const [beforeLoginPage, setBeforeLoginPage] = useState(() =>
    localStorage.getItem(LOCAL_STORAGE_KEY.BEFORE_LOGIN_PAGE) || PATH.HOME,
  )

  const setRedirectPage = (page) => {
    setBeforeLoginPage(page)
    localStorage.setItem(LOCAL_STORAGE_KEY.BEFORE_LOGIN_PAGE, page)
  }

  return (
    <PageContext.Provider value={{ beforeLoginPage, setBeforeLoginPage, setRedirectPage }}>
      {children}
    </PageContext.Provider>
  )
}

export default BeforeLoginPageProvider