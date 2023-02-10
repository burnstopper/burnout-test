import React, { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "react-bootstrap"
import "./Test.css"

import LikertScale from "../LikertScale/LikertScale"

const Test = ({ quizData, setResults }) => {
    const [backwardDisabled, setBackwardDisabled] = useState(true)
    const [forwardDisabled, setForwardDisabled] = useState(true)

    const [forwardText, setForwardText] = useState("Вперед")

    const [index, setIndex] = useState(0)
    const [item, setItem] = useState(quizData[index])
    const [chosen, setChosen] = useState(null)

    const [answers, setAnswers] = useState(Array(22).fill("NONE"))

    const mappingAnswers = {
        NONE: "NONE",
        Никогда: "NEVER",
        "Очень редко": "VERY_RARELY",
        Редко: "RARELY",
        Иногда: "SOMETIMES",
        Часто: "OFTEN",
        "Очень часто": "VERY_OFTEN",
        Ежедневно: "DAILY",
    }

    const onChange = (chosen) => {
        console.log("called")
        setChosen(chosen)
        if (chosen === null) {
            setForwardDisabled(true)
        } else {
            setForwardDisabled(false)
        }
    }

    const handleSubmit = async (event) => {
        console.log(answers)
        const data = {
            answer1: mappingAnswers[answers[0]],
            answer2: mappingAnswers[answers[1]],
            answer3: mappingAnswers[answers[2]],
            answer4: mappingAnswers[answers[3]],
            answer5: mappingAnswers[answers[4]],
            answer6: mappingAnswers[answers[5]],
            answer7: mappingAnswers[answers[6]],
            answer8: mappingAnswers[answers[7]],
            answer9: mappingAnswers[answers[8]],
            answer10: mappingAnswers[answers[9]],
            answer11: mappingAnswers[answers[10]],
            answer12: mappingAnswers[answers[11]],
            answer13: mappingAnswers[answers[12]],
            answer14: mappingAnswers[answers[13]],
            answer15: mappingAnswers[answers[14]],
            answer16: mappingAnswers[answers[15]],
            answer17: mappingAnswers[answers[16]],
            answer18: mappingAnswers[answers[17]],
            answer19: mappingAnswers[answers[18]],
            answer20: mappingAnswers[answers[19]],
            answer21: mappingAnswers[answers[20]],
            answer22: mappingAnswers[answers[21]],
        }

        try {
            const response = await axios.post(
                "http://burnout.westeurope.cloudapp.azure.com:8080/answer/save-answer",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            console.log(response.data)
            setResults(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const onBackwardHandler = () => {
        const newIndex = index - 1
        if (newIndex < quizData.length - 2) {
            setIndex(newIndex)
            setItem(quizData[newIndex])
        } else {
            setIndex(newIndex)
            setItem(quizData[newIndex])
            setForwardText("Вперед")
        }

        if (newIndex == 0) {
            setBackwardDisabled(true)
        }
    }

    const onForwardHandler = () => {
        const newIndex = index + 1
        if (newIndex < quizData.length - 1) {
            setIndex(newIndex)
            setItem(quizData[newIndex])
            reset()
            answers[index] = chosen.text
        } else if (newIndex >= quizData.length) {
            answers[index] = chosen.text
            handleSubmit()
        } else {
            setIndex(newIndex)
            setItem(quizData[newIndex])
            reset()
            answers[index] = chosen.text
            setForwardText("Отправить")
        }

        if (newIndex >= 1) {
            setBackwardDisabled(false)
        }
        setChosen(null)
    }

    const [render, forceRender] = useState(0)

    const reset = () => {
        forceRender(Date.now())
        setChosen(null)
        setForwardDisabled(true)
    }

    return (
        <div className="quiz">
            <div className="question">
                <label>{item.id + 1}/22</label>
                <LikertScale
                    id={item.id}
                    question={item.question}
                    options={item.options}
                    onChange={onChange}
                    key={render}
                />
            </div>

            <div className="controls">
                <Button disabled={backwardDisabled} onClick={onBackwardHandler}>
                    Назад
                </Button>
                <Button disabled={forwardDisabled} onClick={onForwardHandler}>
                    {forwardText}
                </Button>
            </div>
        </div>
    )
}

export default Test
