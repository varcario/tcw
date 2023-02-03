import React, {Component} from 'react';
import Footer from '../common/footer';
import Container from './container';
import Header from '../common/header';

class Speakers extends Component {

    render(){
        return(
            <div>
                <Header activeLink="2" />
                <Container />
                <Footer />
            </div>
        );
    }
}

export default Speakers;