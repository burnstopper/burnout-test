import React, { useState } from "react"

import Likert from "react-likert-scale"

const LikertScale = ({ id, question, options }) => {
    const likertOptions = {
        question: question,
        responses: options,
        id: id,
        onChange: (val) => {
            console.log(val)
        },
        layout: "stacked",
    }
    return (
        <div>
            <Likert {...likertOptions} />
        </div>
    )
}

export default LikertScale
