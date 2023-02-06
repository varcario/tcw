import React from 'react';
import Container from './container';
import Nav from '../../common/nav';

export default function Committee(){
    return(
        <div>
            <div className="container-fluid p-0 overflow-hidden">
                <div className="row flex-nowrap">
                    <Nav />
                    <Container />
                </div>
            </div>
        </div>
    )
}