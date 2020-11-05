import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../Layouts/boxBooking.scss'
import { movieService } from '../../Service';

function BoxBooking() {

    const [IdMovie, setIdMovie] = useState();
    const [cinemaList, setCinemaList] = useState([]);
    let [movieList, setmovieList] = useState({});
    const [cinemaGroupList, setCinemaGroupList] = useState([])


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

    useEffect(() => {
        movieService.fetchShowtimeToIdMovie(IdMovie)
            .then(res => {
                let array = res.data;
                setCinemaList(array);
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }, [IdMovie])


    return (
        <section className="boxBooking">


            <div>
                <h3>MUA VÉ NHANH</h3>
                <ul className="nav nav-pills">
                    <li className="nav-item">

                        <a className="nav-link active" data-toggle="pill" href="#home">Theo phim</a>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#menu1">Theo rạp</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane container active" id="home">

                        <div className="form-group">
                            <select
                                className="form-control"
                                id="movieLst"
                                onChange={(e) => { setIdMovie(e.target.value) }}

                            >
                                <option>Chọn phim</option>
                                {
                                    Object.entries(movieList).map(([index, item]) =>

                                        (
                                            <option
                                                key={index}
                                                value={item.maPhim}
                                            >
                                                {item.tenPhim}
                                            </option>

                                        )
                                    )
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <select
                                className="form-control"
                                id="movieLst"
                                onChange={(e) => { setCinemaGroupList(e.target.value) }}
                            >
                                <option>Chọn rạp </option>
                                {
                                    cinemaList.heThongRapChieu?.map((item, index) => {

                                        return (
                                            <option
                                                key={index}
                                                value={
                                                    JSON.stringify(item.cumRapChieu)
                                                }

                                            >
                                                {item.tenHeThongRap}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <select
                                className="form-control"
                            // onChange={(e) => { setCinemaGroupList(e.target.value) }}
                            >
                                <option>Chọn cụm rạp </option>
                                {

                                    // cinemaGroupList?.map((item, index) => {

                                        console.log(cinemaGroupList)

                                        // return (
                                        //     <option
                                        //         key={index}
                                        //         value={item.cumRapChieu}
                                        //     >
                                        //         {item.tenHeThongRap}
                                        //     </option>
                                        // )
                                    // })
                                }
                            </select>
                        </div>
                    </div>
                    {/* <div className="tab-pane container fade" id="menu1">...</div> */}
                </div>
            </div >

        </section >
    )
}

export default BoxBooking
