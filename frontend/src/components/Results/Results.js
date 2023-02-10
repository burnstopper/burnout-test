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
            <label>Результаты</label>
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
                            {mappingResults[results?.result?.exhaustionLevel]}
                        </td>
                        <td>{results?.result?.exhaustionPercent}%</td>
                    </tr>
                    <tr>
                        <td>Деперсонализация </td>
                        <td>{results?.result?.deperson}</td>
                        <td>
                            {mappingResults[results?.result?.depersonLevel]}
                        </td>
                        <td>{results?.result?.depersonPercent}%</td>
                    </tr>
                    <tr>
                        <td>Редукция профессионализма</td>
                        <td>{results?.result?.reduction}</td>
                        <td>
                            {mappingResults[results?.result?.reductionLevel]}
                        </td>
                        <td>{results?.result?.reductionPercent}%</td>
                    </tr>
                    <tr>
                        <td>Интегральный индекс выгорания</td>
                        <td>{results?.result?.burnoutIndex}</td>
                        <td></td>
                        <td>{results?.result?.burnoutIndexPercent}%</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Results
