import React from "react"
import "./Results.css"

const Results = ({ results }) => {
    return (
        <div className="results">
            <label>Результаты</label>
            <div className="params">
                <div className="param">
                    <label className="paramname">
                        Эмоциональное истощение{" "}
                    </label>
                </div>
                <div className="param">
                    <label className="paramname">Деперсонализация </label>
                </div>
                <div className="param">
                    <label className="paramname">
                        Редукция профессионализма
                    </label>
                </div>
                <div className="param">
                    <label className="paramname">
                        Интегральный индекс выгорания
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Results
