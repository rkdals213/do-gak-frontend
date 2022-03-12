import './App.css';
import Header from "./components/header/Header"
import TokenProvider from "./provider/TokenProvider"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {AUTH_PATH, PATH} from "./constants/path"
import Boards from "./components/pages/boards/Boards"
import BoardDetail from "./components/pages/board-detail/BoardDetail"
import KakaoCallback from "./components/header/KakaoCallback"
import React from "react"
import ScrollToTop from "./components/scroll-to-top/ScrollToTop"
import RegisterBoard from "./components/pages/register-board/RegisterBoard"
import UpdateBoard from "./components/pages/register-board/UpdateBoard"
import PrivateRoute from "./components/privateRoute/PrivateRoute"
import BeforeLoginPageProvider from "./provider/BeforeLoginPageProvider"
import MyPage from "./components/pages/mypage/MyPage"

function App() {
    return (
        <div>
            <BeforeLoginPageProvider>
                <TokenProvider>
                    <BrowserRouter>
                        <Header/>
                        <main className={"main"}>
                            <ScrollToTop>
                                <Routes>
                                    <Route path={AUTH_PATH.KAKAO_CALLBACK} element={
                                        <KakaoCallback/>
                                    }/>
                                    <Route path={PATH.HOME} element={
                                        <Boards/>
                                    }/>
                                    <Route path={PATH.BOARD} element={
                                        <Boards/>
                                    }/>
                                    <Route path={PATH.BOARD_DETAIL} element={
                                        <BoardDetail/>
                                    }/>

                                    <Route path={PATH.BOARD_REGISTER} element={
                                        <PrivateRoute>
                                            <RegisterBoard/>
                                        </PrivateRoute>
                                    }/>
                                    <Route path={PATH.BOARD_UPDATE} element={
                                        <PrivateRoute>
                                            <UpdateBoard/>
                                        </PrivateRoute>
                                    }/>
                                    <Route path={PATH.MY_PAGE} element={
                                        <PrivateRoute>
                                            <MyPage/>
                                        </PrivateRoute>
                                    }/>
                                </Routes>
                            </ScrollToTop>
                        </main>
                    </BrowserRouter>
                </TokenProvider>
            </BeforeLoginPageProvider>
        </div>
    )
}

export default App
