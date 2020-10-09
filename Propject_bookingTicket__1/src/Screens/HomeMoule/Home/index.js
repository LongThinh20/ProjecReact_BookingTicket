import React from 'react'

import Carousel from '../../../Components/Carousel'
import usePageLoading from '../../../Components/Hook/usePageLoading'
import ListGroup from '../../../Components/ListGroup'
import MobileApp from '../../../Components/MobileApp'
import ScrollArrow from '../../../Components/ScrollArrow'
import SliderMovie1 from '../../../Components/SliderMovie1'


export default function HomePage(props) {

    const [loader, showLoader, hideLoader] = usePageLoading();

    return (
        <div>
            <Carousel />
            <SliderMovie1 showLoader={showLoader} hideLoader={hideLoader} />
            <ListGroup />
            <MobileApp />
            <ScrollArrow />
            {loader}
        </div>
    )
}
