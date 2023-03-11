import React, { useState } from "react"
import { Table, Button, Spinner } from "react-bootstrap"
import HistoryElement from "../HistoryElement/HistoryElement"
import axios from "axios"
import "./History.css"
import CookieLib from "../../utils/cookies"

const History = ({ setResults, loadHistory, historyResults }) => {
    const [showSpinner, setShowSpinner] = useState(false)

    const onUpdateHandler = async () => {
        setShowSpinner(true)
        await loadHistory()
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
                    {historyResults !== null && historyResults ? (
                        historyResults.map((result, index) => (
                            <HistoryElement
                                key={index}
                                id={index + 1}
                                results={result}
                                setResults={setResults}
                            />
                        ))
                    ) : (
                        <p>...</p>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default History
