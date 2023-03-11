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
import axios from "axios"

function App() {
    const [results, setResults] = useState(0)

    const [showTest, setShowTest] = useState(false)

    const [token, setToken] = useState(CookieLib.getCookieToken())

    const [showHistory, setShowHistory] = useState(false)

    const handleClick = () => {
        setShowTest(true)
    }

    const handleHistoryClick = () => {
        setShowHistory(!showHistory)
        if (!showHistory) {
            loadHistory()
        }
    }

    const loadHistory = async () => {
        const token = CookieLib.getCookieToken()
        if (token && token !== "undefined") {
            try {
                const response = await axios.get(
                    `http://burnout.westeurope.cloudapp.azure.com//api/v1/results?token=${token}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                console.log(response.data)
                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <div className="app">
            <Header token={token} setToken={setToken} />
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
                    <Button variant="success" onClick={handleHistoryClick}>
                        История
                    </Button>
                </div>
                {showHistory ? (
                    <History
                        setResults={setResults}
                        loadHistory={loadHistory}
                    />
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default App
