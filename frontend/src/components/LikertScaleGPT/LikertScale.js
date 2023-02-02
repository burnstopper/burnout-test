import React, { useState } from "react"
import "./LikertScale.css"

const LikertScaleGPT = () => {
    const options = ["-2", "-1", "0", "1", "2"]
    const [selectedOption, setSelectedOption] = useState(null)

    const handleDrag = (event) => {
        const xCoordinate = event.clientX
        const scaleWidth = event.target.clientWidth
        const optionWidth = scaleWidth / options.length
        const optionIndex = Math.round(xCoordinate / optionWidth) - 1
        setSelectedOption(options[optionIndex])
    }

    return (
        <div className="scale-container">
            <h3>
                Please indicate your level of agreement with the following
                statement:
            </h3>
            <p>The product is easy to use</p>
            <div className="scale" onMouseMove={handleDrag}>
                {/* {options.map((option, index) => (
                    <div
                        key={option}
                        className={`option ${
                            selectedOption === option ? "selected" : ""
                        }`}
                        style={{ width: `${100 / options.length}%` }}
                    >
                        {option}
                    </div>
                ))} */}
                <div
                    className="drag-point"
                    style={{
                        left: `${
                            (options.indexOf(selectedOption) / options.length) *
                            100
                        }%`,
                    }}
                ></div>
            </div>
            <div className="options-under-scale">
                {options.map((option, index) => (
                    <div key={option} className="option-name">
                        {option}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LikertScaleGPT
