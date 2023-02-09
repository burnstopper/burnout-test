import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import "./Test.css"

import LikertScale from "../LikertScale/LikertScale"

const Test = ({ quizData }) => {
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
        "Очень редко": "VERY RARE",
        Редко: "RARE",
        Иногда: "SOMETIMES",
        Часто: "OFTEN",
        "Очень часто": "VERY OFTEN",
        Ежедневно: "EVERYDAY",
    }

    const log = (methodName) => {
        console.log(`${methodName}`)
        console.log(`chosen.text: ${chosen?.text}`)
        console.log(`index: ${index}`)
    }

    const onChange = (chosen) => {
        console.log("called")
        setChosen(chosen)
        // if (index < quizData.length - 1) {
        //     setForwardDisabled(false)
        // }
        if (chosen === null) {
            setForwardDisabled(true)
        } else {
            setForwardDisabled(false)
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
        console.log(answers)
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
