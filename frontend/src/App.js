import "./App.css"
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header/Header"
import Test from "./components/Test/Test"
import Results from "./components/Results/Results"
import Pretest from "./components/Pretest/Pretest"
import History from "./components/History/History"
import { burnoutQuizData } from "./data"
import { Button } from "react-bootstrap"
import CookieLib from "./utils/cookies"

function App() {
    const [results, setResults] = useState(0)

    const [showTest, setShowTest] = useState(false)

    const [token, setToken] = useState(CookieLib.getCookieToken())

    const handleClick = () => {
        setShowTest(true)
    }

    return (
        <div className="app">
            <Header token={token} />
            <div className="content">
                {showTest ? (
                    <Test
                        quizData={burnoutQuizData}
                        setResults={setResults}
                        setToken={setToken}
                    />
                ) : (
                    <Pretest handleClick={handleClick} />
                )}

                <Results results={results} />
                <div className="historybtn">
                    <Button variant="success">История</Button>
                </div>
                <History />
            </div>
        </div>
    )
}

export default App
