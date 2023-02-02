import "./App.css"
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

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
                            <Button>Submit</Button>
                        </div>
                    )}
                </Container>
            </body>
        </html>
    )
}

export default App
