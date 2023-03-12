import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { Button, Spinner } from "react-bootstrap"
import "./Test.css"
import CookieLib from "../../utils/cookies"

import LikertScale from "../LikertScale/LikertScale"

const Test = ({ quizData, setResults, setToken }) => {
    const [backwardDisabled, setBackwardDisabled] = useState(true)
    const [forwardDisabled, setForwardDisabled] = useState(true)

    const [forwardText, setForwardText] = useState("Вперед")

    const [index, setIndex] = useState(0)
    const [item, setItem] = useState(quizData[index])
    const [chosen, setChosen] = useState(null)

    const [answers, setAnswers] = useState(Array(22).fill("NONE"))

    const [state, setState] = useState("testing") // testing, waiting, finished

    const refLikert = useRef(null)

    const mappingAnswers = {
        NONE: "NONE",
        Никогда: "NEVER",
        "Очень редко": "VERY_RARELY",
        Редко: "RARELY",
        Иногда: "SOMETIMES",
        Часто: "OFTEN",
        "Очень часто": "VERY_OFTEN",
        Ежедневно: "DAILY ",
    }

    // useEffect(() => {
    //     const secondRadio = refLikert.current.querySelectorAll(
    //         'input[type="radio"]'
    //     )[1]
    //     secondRadio.checked = true
    // }, [index])

    const onChange = (chosen) => {
        setChosen(chosen)
        if (chosen === null) {
            setForwardDisabled(true)
        } else {
            setForwardDisabled(false)
        }
    }

    const handleSubmit = async (event) => {
        setState("waiting")
        console.log(answers)
        const date = new Date().toISOString()
        console.log(date)
        const token =
            CookieLib.getCookieToken() == "undefined" ||
            !CookieLib.getCookieToken()
                ? ""
                : CookieLib.getCookieToken()
        console.log(token)
        const data = {
            token: token,
            answer: {
                date_time: date,
                quiz_id: 0,
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
            },
        }
        console.log(data)
        console.log(`${process.env.REACT_APP_HOST_NAME}/api/v1/answers`)
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_HOST_NAME}/api/v1/answers`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            console.log(response)
            setResults(response.data)
            console.log(response.data.token)
            CookieLib.setCookieToken(response.data.token)
            setToken(response.data.token)
            setState("finished")
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

    const returnToStart = () => {
        window.location.reload()
    }

    let componentToRender
    if (state === "testing") {
        componentToRender = (
            <>
                <div className="question">
                    <label>{item.id + 1}/22</label>
                    <LikertScale
                        id={item.id}
                        question={item.question}
                        options={item.options}
                        onChange={onChange}
                        key={render}
                        ref={refLikert}
                    />
                </div>

                <div className="controls">
                    <Button
                        variant="success"
                        disabled={backwardDisabled}
                        onClick={onBackwardHandler}
                    >
                        Назад
                    </Button>
                    <Button
                        variant="success"
                        disabled={forwardDisabled}
                        onClick={onForwardHandler}
                    >
                        {forwardText}
                    </Button>
                </div>
            </>
        )
    } else if (state === "waiting") {
        componentToRender = (
            <>
                <div className="textquiz">
                    <p>
                        Важно отметить, что тест на профессиональное выгорание
                        не является диагностическим инструментом и не может
                        заменить консультацию специалиста в области психологии
                        или медицины. Однако, он может помочь обратить внимание
                        на проблему и стать отправной точкой для дальнейших мер
                        по улучшению психологического состояния и качества
                        жизни.
                    </p>
                </div>
                <Button variant="success" disabled className="spinbutton">
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <>Подсчет результатов</>
                </Button>
            </>
        )
    } else if (state === "finished") {
        componentToRender = (
            <>
                <div className="textquiz">
                    <p>
                        Важно отметить, что тест на профессиональное выгорание
                        не является диагностическим инструментом и не может
                        заменить консультацию специалиста в области психологии
                        или медицины. Однако, он может помочь обратить внимание
                        на проблему и стать отправной точкой для дальнейших мер
                        по улучшению психологического состояния и качества
                        жизни.
                    </p>
                </div>
                <Button variant="success" onClick={returnToStart}>
                    Вернуться к началу
                </Button>
            </>
        )
    }

    return <div className="quiz">{componentToRender}</div>
}

export default Test
