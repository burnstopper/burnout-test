import React from "react"
import { Button } from "react-bootstrap"
import "./HistoryElement.css"

const HistoryElement = ({ id, date, index, setResults }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{date}</td>
            <td>{index}</td>
            <td>
                <Button variant="success">Подгрузить</Button>
            </td>
        </tr>
    )
}

export default HistoryElement
