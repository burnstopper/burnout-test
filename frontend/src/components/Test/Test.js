import React, { useState, useEffect } from "react"

import LikertScale from "../LikertScale/LikertScale"

const Test = ({ quizData }) => {
    return (
        <div className="testwindow">
            <LikertScale
                id={quizData[0].id}
                question={quizData[0].question}
                options={quizData[0].options}
            />
        </div>
    )
}

export default Test
