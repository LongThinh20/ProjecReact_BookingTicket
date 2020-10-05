import React, { Component } from 'react'

import Carousel from '../../../Components/Carousel'
import ListGroup from '../../../Components/ListGroup'
import SliderMovie1 from '../../../Components/SliderMovie1'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <SliderMovie1 />
                <ListGroup />
               
            </div>
        )
    }

}

export default HomePage;