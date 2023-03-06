import React, { useState } from "react"

import Likert from "react-likert-scale"

const LikertScale = ({ id, question, options, onChange, key, ref }) => {
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
            <Likert {...likertOptions} ref={ref} />
        </div>
    )
}

export default LikertScale
