import "./App.css"
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header/Header"
import Test from "./components/Test/Test"
import Results from "./components/Results/Results"
import { quizData } from "./data"

function App() {
    const [results, setResults] = useState(0)

    return (
        <div className="app">
            <Header />
            <div className="content">
                <Test quizData={quizData} setResults={setResults} />
                <Results results={results} />
            </div>
        </div>
    )
}

export default App
