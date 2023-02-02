import React, { useState, useEffect } from "react"

import LikertScale from "../LikertScale/LikertScale"

const Test = ({ quizData }) => {
    /* Dont need this unless we want to show questions 1 by 1
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [state, setState] = useState({ question: "", options: [] })

    const loadQuizData = () => {
        setState((prevState) => ({
            ...prevState,
            question: quizData[currentQuestion].question,
            options: quizData[currentQuestion].options,
        }))
    }

    useEffect(() => {
        loadQuizData()
    })
    */

    return (
        <div>
            <ol>
                {quizData.map((item) => (
                    <li>
                        <LikertScale
                            id={item.id}
                            question={item.question}
                            options={item.options}
                        />
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Test
