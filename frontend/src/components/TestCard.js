import React from "react"
import { Card, Button } from "react-bootstrap"

const TestCard = ({ data, toggle0 }) => {
    return (
        <Card className="h-100 shadow-sm bg-white rounded mt-5">
            {/* <Card.Img variant="top" src={data.image} /> */}
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justif-content-between">
                    <Card.Title className="mb-0 font-weight-bold">
                        {data.name}
                    </Card.Title>
                </div>
                <Card.Text className="text-secondary">{data.desc}</Card.Text>
                <Button
                    onClick={data.id == 0 ? toggle0 : () => {}}
                    className="mt-auto font-weight-bold"
                    variant="success"
                    disabled={data.id == 0 ? false : true}
                >
                    Пройти тест
                </Button>
            </Card.Body>
        </Card>
    )
}

export default TestCard
