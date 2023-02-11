import React from 'react';
import Container from './container';
import Nav from '../../common/nav';

export default function Officer(){
    return(
        <div className="container-fluid p-0 overflow-hidden flex-column vh-100" >
            <div className="d-flex flex-column h-100"  style={{marginTop: "3rem"}}>

                <div className="row flex-nowrap flex-fill" style={{marginBottom: "3rem"}}>            
                    <Nav />
                    <Container />            
                </div>           
                
                <div className="row">
                    <div className="d-flex ps-3 fixed-top" style={{background: "#0768c4", height: "3rem"}}>
                        <span className="align-self-center">
                            <h5>TCw</h5>
                        </span>
                    </div>
                </div>                 

            </div>
        </div>
    )
}