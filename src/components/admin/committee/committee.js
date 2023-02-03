import React from 'react';
import Header from '../../common/header';
import Container from './container';
import Footer from '../../common/footer';
import Nav from '../../common/nav';

export default function Committee(){
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