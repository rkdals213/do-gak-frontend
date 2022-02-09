import './App.css';
import Header from "./components/header/Header"
import TokenProvider from "./provider/TokenProvider"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {PATH, AUTH_PATH} from "./constants/path"
import Boards from "./components/pages/boards/Boards"
import BoardDetail from "./components/pages/boards/BoardDetail"
import Auth from "./components/header/Auth"
import Profile from "./components/header/Profile"
import React from "react"
import ScrollToTop from "./components/scroll-to-top/ScrollToTop"
import RegisterBoard from "./components/pages/boards/RegisterBoard"
import UpdateBoard from "./components/pages/boards/UpdateBoard"

function App() {

    return (
        <div>
            <TokenProvider>
                <BrowserRouter>
                    <Header/>
                    <main className={"main"}>
                        <ScrollToTop>
                            <Routes>
                                <Route path={AUTH_PATH.CALLBACK} element={
                                    <Auth/>
                                }/>
                                <Route path={AUTH_PATH.PROFILE} element={
                                    <Profile/>
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
                                    <RegisterBoard/>
                                }/>
                                <Route path={PATH.BOARD_UPDATE} element={
                                    <UpdateBoard/>
                                }/>
                            </Routes>
                        </ScrollToTop>
                    </main>
                </BrowserRouter>
            </TokenProvider>
        </div>
    )
}

export default App
