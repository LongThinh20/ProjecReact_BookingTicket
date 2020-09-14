import React, { Component } from 'react'

import Carousel from '../../Components/Carousel';
import ListGroup from '../../Components/ListGroup';
import SliderMovie from '../../Components/SliderMovie';


class HomePage extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <SliderMovie/>
                <ListGroup />              
            </div>
        )
    }

}


export default HomePage;