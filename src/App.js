import './App.css';
import Auth from "./components/Auth"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile"

function App() {
    const KAKAO_AUTH_URL = process.env.REACT_APP_KAKAO_AUTH_URL

    return (
        <div>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path={"/*"} element={
                            <div>
                                <h1><a href={KAKAO_AUTH_URL}>Kakao Login</a></h1>
                            </div>}/>
                        <Route path={"/oauth/kakao/callback"} element={
                            <Auth/>
                        }/>
                        <Route path={"profile"} element={
                            <Profile/>
                        }/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
