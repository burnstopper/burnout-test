import React from "react"
import "./Pretest.css"
import { Button } from "react-bootstrap"

const Pretest = ({ handleClick }) => {
    return (
        <div className="quiz">
            <div className="textquiz">
                <p>
                    Тест на профессиональное выгорание - это психологический
                    инструмент, который помогает оценить уровень выгорания у
                    человека, работающего в условиях повышенной психологической
                    нагрузки.
                </p>
                <p>
                    Вам предлагается 22 утверждения о чувствах и переживаниях,
                    связанных с работой. Пожалуйста, прочитайте внимательно
                    каждое утверждение и решите, бывают ли у вас такие мысли или
                    чувства.
                </p>
            </div>
            <Button onClick={handleClick}>Начать тест</Button>
        </div>
    )
}

export default Pretest
