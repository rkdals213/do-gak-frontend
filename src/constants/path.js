const PATH = {
    HOME: "/",
    BOARD: "/board",
    BOARD_DETAIL: "/boardDetail",
    BOARD_REGISTER: "/boardRegister"
}

const AUTH_PATH = {
    CALLBACK: "/oauth/kakao/callback",
    PROFILE: "profile"
}

const URL = {
    KAKAO_AUTH_URL: process.env.REACT_APP_KAKAO_AUTH_URL
}

export {
    PATH,
    AUTH_PATH,
    URL
}
