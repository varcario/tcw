import React, {Component} from 'react';
import Footer from '../common/footer';
import Container from './container';
import Header from '../common/header';

class About extends Component {

    render(){
        return(
            <div>
                <Header activeLink="1" />
                <Container />
                <Footer />
            </div>
        );
    }
}

export default About;