
import log from './../services/log-service'
import { Container, Row, Col, Stack, Nav, Button } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

function Home() {
  const name = Home.name
  log.info(`${name} component begin creation`)
  log.info(`${name} component end creation`)
  return (
    <Container className="p-0 vh-100 overflow-hidden" fluid={true}>
        <Col>
            <Row className="w-100 m-0 text-white sticky-top align-items-center" style={{backgroundImage: "linear-gradient(#3269B9, #295EAE)", minHeight: "3rem", borderTop: "1px solid #9EBEDC", borderRight: "1px solid #EAECED", borderBottom: "0", borderLeft: "1px solid #EAECED"}}>
                {/* Toggler */}
                <Stack direction="horizontal" gap={3} style={{paddingLeft: "6px"}}>
                    {/* <Button varient="primary" data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" className="btn btn-primary"
                            aria-controls="#sidenav-1" aria-haspopup="true"><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-list" viewBox="0 0 1rem 1rem">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                          </svg>
                    </Button>                                     */}
                    <div>
                        Tarrant countywide
                    </div>
                </Stack>
            </Row>
            <Row className="w-100 vh-100 m-0">
                <Col className="border-right text-white h-100" style={{padding: "3rem 0 0 0", marginTop: "-3rem", maxWidth: "18rem", background: "#353B40", border: "1px solid #EAECED"}}>
                    <Stack direction="vertical" gap={3} style={{padding: "1rem 0 0 1rem"}}>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Link to="/">Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/officers">Officers</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/recordings">Recordings</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/speakers">Speakers</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/reports">Reports</Link>
                            </Nav.Item>
                        </Nav>
                    </Stack>
                </Col>
                <Col className="h-100" style={{padding: "5rem 0 0 0", marginTop: "-5rem"}}>
                    <Outlet />                    
                </Col>
            </Row>
        </Col>
    </Container>
  )
}

export default Home;
