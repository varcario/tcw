import log from '../services/log-service'
import { connect } from 'react-redux'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { GoogleLogin } from '@react-oauth/google'

export default connect()(function Welcome() {
    const name = Welcome.name
    log.info(`${name} component being creation`)
    log.info(`${name} component end creation`)

    function handleSubmit() {
        log.info(`${name} component begin handling submit`)
        log.info(`${name} component end handling submit`)
    }
    function responseMessage(response) {
        log.info(`${name} component begin onSuccess`)
        log.info(`${name} ${response}`)
        log.info(`${name} component end onSuccess`)
    }
    function errorMessage(error) {
        log.info(`${name} component begin onError`)
        log.info(`${name} ${error}`)
        log.info(`${name} component end onError`)
    }

    return (<div className="container-fluid m-0 p-0 h-100">
        <Row className="m-0 align-items-center" style={{ background: "#FEFEFE", minHeight: "2rem", borderTop: "1px solid #EAECED", borderRight: "1px solid #EAECED", borderBottom: "1px solid #EAECED" }}>
            <div>
                Welcome!
            </div>
        </Row>
        <Row className="card rounded-0 border-0 m-0 p-0 h-100 overflow-auto" style={{ height: "auto", border: "1px solid #EAECED" }} >
            <div className="card-body" style={{ backgroundColor: "#F3F5F7", borderTop: "0", borderRight: "1px solid #EAECED", borderBottom: "1px solid #EAECED", borderLeft: "0" }}>


                <Container>
                    <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

                    {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" />
                            <Button onClick={handleSubmit} className="mt-3" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>                        
                    </Form.Group>                     */}
                </Container>
            </div>
        </Row>
    </div>)
})