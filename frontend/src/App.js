import "./App.css"
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"

import Menu from "./components/Menu/Menu"
import Test from "./components/Test/Test"
import NavDropDown from "./components/NavDropDown"
import { Container, Row, Col, Button } from "react-bootstrap"
import { quizData, siteData } from "./data"
import TestCard from "./components/TestCard"

function App() {
    const [testVisible, setTestVisible] = useState(false)

    const btn0OnClickHandler = () => {
        setTestVisible(!testVisible)
    }

    const sendAnswers = () => {
        fetch("https://be95-83-242-179-144.eu.ngrok.io/answer/save-answer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                answer1: "TEST",
                answer2: "TEST",
                answer3: "TEST",
                answer4: "TEST",
                answer5: "TEST",
                answer6: "TEST",
                answer7: "TEST",
                answer8: "TEST",
                answer9: "TEST",
                answer10: "TEST",
                answer11: "TEST",
                answer12: "TEST",
                answer13: "TEST",
                answer14: "TEST",
                answer15: "TEST",
                answer16: "TEST",
                answer17: "TEST",
                answer18: "TEST",
                answer19: "TEST",
                answer20: "TEST",
                answer21: "TEST",
                answer22: "TEST",
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error))
    }

    return (
        <html>
            <head></head>
            <body>
                <NavDropDown />
                <Container>
                    <Row>
                        {siteData.map((data) => (
                            <Col xs={3} className="mb-5" key={`${data.id}`}>
                                <TestCard
                                    data={data}
                                    toggle0={btn0OnClickHandler}
                                />
                            </Col>
                        ))}
                    </Row>
                    {testVisible && (
                        <div className="test">
                            <Row className="mt-5">
                                <Test quizData={quizData} />
                            </Row>
                            <Button onClick={sendAnswers}>Submit</Button>
                        </div>
                    )}
                </Container>
            </body>
        </html>
    )
}

export default App
