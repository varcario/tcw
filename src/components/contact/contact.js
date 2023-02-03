import React, {Component} from 'react';
import Footer from '../common/footer';
import Container from './container';
import Header from '../common/header';

class Contact extends Component {

    render(){
        return(
            <div>
                <Header activeLink="5" />
                <Container />
                <Footer />
            </div>
        );
    }
}

export default Contact;