import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../Layouts/Slider.scss';
import SampleNextArrow from './Arrow/nextArrow';
import SamplePrevArrow from './Arrow/prevArrow';
import SliderItems from './SliderItems';
import { connect } from 'react-redux';
import {fetchMovie} from '../../Redux/Actions/movie';



class SliderMovie extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <section className="mySlider ">
                <div className="container">
                    <div className="newIn__title">
                        <h2>DANH SÁCH PHIM</h2>
                    </div>
                    <Slider {...settings}>
                        {
                            this.props.movieList.map((item, index) =>
                                <SliderItems item={item} />
                            )
                        }

                    </Slider>
                </div>
            </section>
        )
    }
    componentDidMount() {
      this.props.dispatch(fetchMovie());
    };
}
const mapStateToProps = state => ({
    movieList: state.movie.movies
})


export default connect(mapStateToProps)(SliderMovie);


