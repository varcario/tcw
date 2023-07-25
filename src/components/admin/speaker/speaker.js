import React from 'react';
import Container from './container';
import Nav from '../../common/nav';

export default function Speaker(){
    return(
        <div>
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <Nav />
                    <Container />
                </div>
            </div>
        </div>
    )
}