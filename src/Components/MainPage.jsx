import { Card } from "react-bootstrap"

const MainPage = (props) => {


    const confirmedData = props.confirmedData
    const recoveredData = props.recoveredData
    const deathData = props.deathData
    const text = props.text

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Card bg="primary" text="white">
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center">{`${text} Cases`}</Card.Title>
                            <Card.Text className="d-flex justify-content-center values">{confirmedData}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text"></Card.Footer>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card bg="success" text="white">
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center">{`${text} Recover`}</Card.Title>
                            <Card.Text className="d-flex justify-content-center values">{recoveredData}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text"></Card.Footer>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card bg="danger" text="white">
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center">{`${text} Deaths`}</Card.Title>
                            <Card.Text className="d-flex justify-content-center values">{deathData}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text"></Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default MainPage;