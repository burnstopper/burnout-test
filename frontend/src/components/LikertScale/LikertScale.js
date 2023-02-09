import React, { useState } from "react"

import Likert from "react-likert-scale"

const LikertScale = ({ id, question, options, onChange, key }) => {
    const likertOptions = {
        question: question,
        responses: options,
        id: id,
        onChange: onChange,
        key: { key },
        layout: "stacked",
    }
    return (
        <div>
            <Likert {...likertOptions} />
        </div>
    )
}

export default LikertScale
