import React from "react"
import { Table } from "react-bootstrap"
import "./Results.css"

const Results = ({ results }) => {
    const mappingResults = {
        LOW: "Низкий",
        MEDIUM: "Средний",
        HIGH: "Высокий",
    }

    return (
        <div className="results">
            <label>
                <h5>Результаты</h5>
            </label>
            <Table striped>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Эмоциональное истощение </td>
                        <td>{results?.exhaustion}</td>
                        <td>{mappingResults[results?.exhaustion_level]}</td>
                        <td>{results?.exhaustion_percent}%</td>
                    </tr>
                    <tr>
                        <td>Деперсонализация </td>
                        <td>{results?.depersonalization}</td>
                        <td>
                            {mappingResults[results?.depersonalization_level]}
                        </td>
                        <td>{results?.depersonalization_percent}%</td>
                    </tr>
                    <tr>
                        <td>Редукция профессионализма</td>
                        <td>{results?.reduction}</td>
                        <td>{mappingResults[results?.reduction_level]}</td>
                        <td>{results?.reduction_percent}%</td>
                    </tr>
                    <tr>
                        <td>Интегральный индекс выгорания</td>
                        <td>{results?.integral_index}</td>
                        <td></td>
                        <td>{results?.integral_index_percent}%</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Results
