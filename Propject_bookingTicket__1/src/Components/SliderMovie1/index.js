import React, { useEffect, useState } from 'react'
import SampleNextArrow from './Arrow/nextArrow';
import SamplePrevArrow from './Arrow/prevArrow';
import SliderItemsOnShow from './SliderItemsOnShow';
import SilderItemsComingSoon from './SilderItemsComingSoon'
import '../../Layouts/Slider.scss';
import Slider from 'react-slick';
// import { useSelector } from 'react-redux';
// import { fetchMovieAction } from '../../Redux/Actions/movie';
import { movieService } from '../../Service';
// import { NavLink } from 'react-bootstrap';



export default function SliderMovie1(props) {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    let [movieList, setmovieList] = useState({});

    useEffect(() => {


        movieService.fetchMovie()
            .then(res => {



                let danhSachPhim = res.data;
                setmovieList(danhSachPhim)
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }, [])


    return (
        <section className="mySlider " id="showlstMovie">
            <div className="container">

                <ul className="nav nav-pills">
                    <li className="nav-item ">
                        <a className="nav-link active" data-toggle="pill" href="#home">
                            <h3 className="__title">ĐANG CHIẾU </h3>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" data-toggle="pill" href="#menu1">
                            <h3 className="__title">SẮP CHIẾU </h3>
                        </a>
                    </li>
                </ul>

            </div>

            <div className="tab-content">
                <div className="tab-pane container active" id="home">
                    <Slider {...settings}>
                        {
                            Object.entries(movieList).map(([index, item]) =>
                                (
                                    <SliderItemsOnShow item={item} index={index} />
                                )
                            )
                        }
                    </Slider>
                </div>
                <div className="tab-pane container fade" id="menu1">
                    <Slider {...settings}>
                        {
                            Object.entries(movieList).map(([index, item]) =>
                                (
                                    <SilderItemsComingSoon item={item} />
                                )


                            )
                        }
                    </Slider>
                </div>

            </div>

        </section>
    )
}
