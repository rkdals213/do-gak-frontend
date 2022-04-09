const PATH = {
  HOME: '/',
  BOARD: '/board',
  BOARD_DETAIL: '/boardDetail',
  BOARD_REGISTER: '/boardRegister',
  BOARD_UPDATE: '/boardUpdate',
  MY_PAGE: '/myPage',
}

const AUTH_PATH = {
  KAKAO_CALLBACK: '/oauth/kakao/callback',
  LOGIN_CALLBACK: '/login-callback',
}

const URL = {
  KAKAO_AUTH_URL: process.env.REACT_APP_KAKAO_AUTH_URL,
}

export {
  PATH,
  AUTH_PATH,
  URL,
}
