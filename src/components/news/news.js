import React, {Component} from 'react';
import Footer from '../common/footer';
import Container from './container';
import Header from '../common/header';

class News extends Component {

    render(){
        return(
            <div>
                <Header activeLink="4" />
                <Container />
                <Footer />
            </div>
        );
    }
}

export default News;