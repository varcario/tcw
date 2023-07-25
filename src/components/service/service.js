import React, {Component} from 'react';
import Footer from '../common/footer';
import Container from './container';
import Header from '../common/header';

class Service extends Component {

    render(){
        return(
            <div>
                <Header activeLink="3" />
                <Container />
                <Footer />
            </div>
        );
    }
}

export default Service;