import React from "react"
import { Button } from "react-bootstrap"
import "./HistoryElement.css"

const HistoryElement = ({ id, results, setResults }) => {
    const transformTime = (date_time) => {
        if (date_time) {
            const dateObj = new Date(date_time)
            const year = dateObj.getFullYear().toString().substr(-2) // Extract last 2 digits of year
            const month = (dateObj.getMonth() + 1).toString().padStart(2, "0") // Get month and pad with leading 0 if necessary
            const day = dateObj.getDate().toString().padStart(2, "0") // Get day and pad with leading 0 if necessary
            const hours = dateObj.getHours().toString().padStart(2, "0") // Get hours and pad with leading 0 if necessary
            const minutes = dateObj.getMinutes().toString().padStart(2, "0") // Get minutes and pad with leading 0 if necessary

            const formattedDateStr = `${day}-${month}-${year} ${hours}:${minutes}`
            return formattedDateStr
        } else {
            return ""
        }
    }

    const setHistoryResult = () => {
        if (results) {
            setResults(results)
        }
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{transformTime(results?.date_time)}</td>
            <td>{results?.integral_index_percent}%</td>
            <td>
                <Button variant="success" onClick={setHistoryResult}>
                    Подгрузить
                </Button>
            </td>
        </tr>
    )
}

export default HistoryElement
