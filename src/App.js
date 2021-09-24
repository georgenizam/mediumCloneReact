import React from "react"
import {BrowserRouter} from 'react-router-dom'

import Routes from 'routes'
import TopBar from 'components/topBar'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <TopBar />
                <Routes />
            </BrowserRouter>
        </div>
    );
}

export default App;
