import React from "react"
import "./Pretest.css"
import { Button } from "react-bootstrap"

const Pretest = ({ handleClick }) => {
    return (
        <div className="quiz">
            <div className="textquiz">
                <p>
                    Вам предлагается 22 утверждения о чувствах и переживаниях,
                    связанных с работой.
                </p>
                <p>
                    Пожалуйста, прочитайте внимательно каждое утверждение и
                    решите, бывают ли у вас такие мысли или чувства.
                </p>
            </div>
            <Button onClick={handleClick}>Начать тест</Button>
        </div>
    )
}

export default Pretest
