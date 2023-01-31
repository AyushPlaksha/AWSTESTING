import React from 'react'
import { Card, Row ,Col } from 'react-bootstrap'
import {Button} from 'react-bootstrap'

function Upcomming() {
    return (
        <div className='upcomming-wrapper mt-5 d-flex justify-content-center'>
         
           
            <Row>
            <Row className='mb-5'>
                <h1>Upcomming Events</h1>
            </Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    
                        <Card.Img variant="top" src="https://plaksha.edu.in/images/home/21670562588.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                
                        <Card.Img variant="top" src="https://plaksha.edu.in/images/home/21670562588.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://plaksha.edu.in/images/home/21670562588.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
        
            </Row>
        </div>
    )
}

export default Upcomming