import './App.css';
import Header from "./components/header/Header"
import TokenProvider from "./components/provider/TokenProvider"
import {BrowserRouter} from "react-router-dom"

function App() {

    return (
        <div>
            <TokenProvider>
                <BrowserRouter>
                    <Header>

                    </Header>
                </BrowserRouter>
            </TokenProvider>
        </div>
    );
}

export default App;
