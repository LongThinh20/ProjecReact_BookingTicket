import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../Layouts/Slider.scss';
import SampleNextArrow from './Arrow/nextArrow';
import SamplePrevArrow from './Arrow/prevArrow';
import SliderItems from './SliderItems';
import Axios from 'axios';
import { connect } from 'react-redux';


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
        Axios({
            method: 'GET',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03',
        }).then(res => {
            this.props.dispatch({
                type: 'FETCH_MOVIES',
                payload: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    };
}
const mapStateToProps = state => ({
    movieList: state.movie.movies
})



export default connect(mapStateToProps)(SliderMovie);


