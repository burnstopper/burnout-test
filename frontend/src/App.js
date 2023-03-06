import "./App.css"
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header/Header"
import Test from "./components/Test/Test"
import Results from "./components/Results/Results"
import Pretest from "./components/Pretest/Pretest"
import { burnoutQuizData } from "./data"

function App() {
    const [results, setResults] = useState(0)

    const [showTest, setShowTest] = useState(false)

    const handleClick = () => {
        setShowTest(true)
    }

    return (
        <div className="app">
            <Header />
            <div className="content">
                {showTest ? (
                    <Test quizData={burnoutQuizData} setResults={setResults} />
                ) : (
                    <Pretest handleClick={handleClick} />
                )}

                <Results results={results} />
            </div>
        </div>
    )
}

export default App
