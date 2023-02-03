import React, {Component} from 'react';
import Container from './container';
import Header from '../common/header';
import Footer from '../common/footer';
import Nav from '../common/nav';

class Contact extends Component {

    render(){
        return(            
            <div>
                <Header activeLink="6" />
                <div class="container-fluid">
                    <div class="row flex-nowrap">
                        <Nav />
                        <Container />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;