import React, { useEffect, useState } from 'react'
import SampleNextArrow from './Arrow/nextArrow';
import SamplePrevArrow from './Arrow/prevArrow';
import SliderItems from './SliderItems';
import '../../Layouts/Slider.scss';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { fetchMovieAction } from '../../Redux/Actions/movie';
import { movieService } from '../../Service';


export default function SliderMovie1() {
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
                <div className="newIn__title">
                    <h2>DANH SÁCH PHIM</h2>
                </div>
                <Slider {...settings}>
                    {
                        Object.entries(movieList).map(([index, item]) =>
                            (
                                <SliderItems item={item} />
                            )


                        )
                    }
                </Slider>
            </div>
        </section>
    )
}
