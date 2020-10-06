import React, { Component } from 'react'

import Carousel from '../../../Components/Carousel'
import ListGroup from '../../../Components/ListGroup'
import ScrollArrow from '../../../Components/ScrollArrow'
import SliderMovie1 from '../../../Components/SliderMovie1'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <SliderMovie1 />
                <ListGroup />
                <ScrollArrow />
            </div>
        )
    }

}

export default HomePage;