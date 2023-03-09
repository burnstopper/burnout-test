import React, { useState } from "react"
import { Table, Button, Spinner } from "react-bootstrap"
import HistoryElement from "../HistoryElement/HistoryElement"
import "./History.css"

const History = ({ setResults }) => {
    const [showSpinner, setShowSpinner] = useState(false)

    const onUpdateHandler = () => {
        setShowSpinner(true)
        //
        setShowSpinner(false)
    }

    return (
        <div className="history">
            <div className="updateBtn">
                <Button
                    variant="success"
                    className="spinbutton"
                    onClick={onUpdateHandler}
                >
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        hidden={!showSpinner}
                    />
                    <>Обновить список</>
                </Button>
            </div>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Дата</th>
                        <th>Интегральный индекс выгорания</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <HistoryElement
                        id={1}
                        date={"08.03.23 12:30:45"}
                        index={"50%"}
                        setResults={setResults}
                    />
                    <HistoryElement
                        id={2}
                        date={"07.12.22 18:00:17"}
                        index={"100%"}
                        setResults={setResults}
                    />
                </tbody>
            </Table>
        </div>
    )
}

export default History
