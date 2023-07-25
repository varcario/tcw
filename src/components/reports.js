import log from '../services/log-service'
import { Row } from 'react-bootstrap'

export default function Reports(){
    const name = Reports.name
    log.info(`${name} component being creation`)
    log.info(`${name} component end creation`)
    return(<div className="container-fluid m-0 p-0 h-100">    
        <Row className="m-0 align-items-center" style={{background: "#FEFEFE", minHeight: "2rem", borderTop: "1px solid #EAECED", borderRight: "1px solid #EAECED", borderBottom: "1px solid #EAECED"}}>
            <div>
                Reports menu controls
            </div>
        </Row>
        <Row className="card rounded-0 border-0 m-0 p-0 h-100 overflow-auto" style={{height: "auto", border: "1px solid #EAECED"}} >
            <div className="card-body" style={{backgroundColor: "#F3F5F7", borderTop: "0", borderRight: "1px solid #EAECED", borderBottom: "1px solid #EAECED", borderLeft: "0"}}>
                Reports component!    
            </div>
        </Row>        
    </div>)
}