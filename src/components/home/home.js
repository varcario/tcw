import React from 'react';
import Footer from '../common/footer';
import Container from './container';
import Header from '../common/header';

export default function Home () {
    return(
        <div>
            <Header activeLink="0" />
            <Container />
            <Footer />
        </div>
    );   
}