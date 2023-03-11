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
                        <td>{results?.result?.exhaustion}</td>
                        <td>
                            {mappingResults[results?.result?.exhaustion_level]}
                        </td>
                        <td>{results?.result?.exhaustion_percent}%</td>
                    </tr>
                    <tr>
                        <td>Деперсонализация </td>
                        <td>{results?.result?.depersonalization}</td>
                        <td>
                            {
                                mappingResults[
                                    results?.result?.depersonalization_level
                                ]
                            }
                        </td>
                        <td>{results?.result?.depersonalization_percent}%</td>
                    </tr>
                    <tr>
                        <td>Редукция профессионализма</td>
                        <td>{results?.result?.reduction}</td>
                        <td>
                            {mappingResults[results?.result?.reduction_level]}
                        </td>
                        <td>{results?.result?.reduction_percent}%</td>
                    </tr>
                    <tr>
                        <td>Интегральный индекс выгорания</td>
                        <td>{results?.result?.integral_index}</td>
                        <td></td>
                        <td>{results?.result?.integral_index_percent}%</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Results
