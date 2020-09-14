import React, { Component } from 'react'

import Header from '../../Components/Header';
import Carousel from '../../Components/Carousel'
import ListGroup from '../../Components/ListGroup'
import Footer from '../../Components/Footer'
import SliderMovie from '../../Components/SliderMovie'


class HomePage extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                {/* <Carousel /> */}
                {/* <SliderMovie/> */}
                <ListGroup />
                {/* <Footer /> */}
            </div>
        )
    }

}


export default HomePage;