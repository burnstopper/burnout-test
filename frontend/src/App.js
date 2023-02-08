import "./App.css"
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header/Header"
import Test from "./components/Test/Test"
import { quizData } from "./data"

function App() {
    const [testVisible, setTestVisible] = useState(false)

    const btn0OnClickHandler = () => {
        setTestVisible(!testVisible)
    }

    const sendAnswers = () => {
        fetch("https://be95-83-242-179-144.eu.ngrok.io/answer/save-answer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                answer1: "TEST",
                answer2: "TEST",
                answer3: "TEST",
                answer4: "TEST",
                answer5: "TEST",
                answer6: "TEST",
                answer7: "TEST",
                answer8: "TEST",
                answer9: "TEST",
                answer10: "TEST",
                answer11: "TEST",
                answer12: "TEST",
                answer13: "TEST",
                answer14: "TEST",
                answer15: "TEST",
                answer16: "TEST",
                answer17: "TEST",
                answer18: "TEST",
                answer19: "TEST",
                answer20: "TEST",
                answer21: "TEST",
                answer22: "TEST",
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error))
    }

    return (
        <div className="app">
            <Header />
            <div className="content">
                <Test quizData={quizData} />
            </div>
        </div>
    )
}

export default App
