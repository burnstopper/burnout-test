import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import "./Test.css"

import LikertScale from "../LikertScale/LikertScale"

const Test = ({ quizData }) => {
    return (
        <div className="quiz">
            <LikertScale
                id={quizData[0].id}
                question={quizData[0].question}
                options={quizData[0].options}
            />
            <div className="controls">
                <Button>Вперед</Button>
                <Button>Назад</Button>
            </div>
        </div>
    )
}

export default Test
