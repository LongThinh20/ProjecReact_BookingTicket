import '../../../Layouts/seatList.scss';
import demo from '../../../Sass/Components/demo.scss';
import seatSelect from '../../../Sass/Components/seatSelect.scss';
import seat from '../../../Sass/Components/seat.scss';
import seatVip from '../../../Sass/Components/seatVip.scss';
import seatBooking from '../../../Sass/Components/seatBooking.scss';
import button_Form from '../../../Sass/Components/button_Form.scss';
import text_Form_Title from '../../../Sass/Components/text_Form_Title.scss';
import text_Green from '../../../Sass/Components/text_Green.scss';
import text_Orange from '../../../Sass/Components/text_Orange.scss';
import text_Normal from '../../../Sass/Components/text_Normal.scss';
import demoText from '../../../Sass/Components/demoText.scss';
import rowSeat from '../../../Sass/Components/rowSeat.scss';
import moment from 'moment'
import Countdown from 'react-countdown-now';
import swal from 'sweetalert';


import React, { useEffect, useState } from 'react'
import { movieService } from '../../../Service';
import Axios from 'axios';
import { date, object } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import countDownComponent from '../../../Components/countDownComponent';
import SeatList from './SeatList';
import PayList from './PayList';

export default function Booking(props) {

    const param = props.match.params.Id;

    let [lstBookingTicket, setlstBookingTicket] = useState({});

    useEffect(() => {

        movieService.fetchBookingTicket(param)
            .then(res => {

                setlstBookingTicket(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [JSON.stringify(lstBookingTicket)])

    // const datVe = () => {

    //     let taiKhoan = JSON.parse(localStorage.getItem('userLogin')).taiKhoan;

    //     let objectDatVe = {
    //         "maLichChieu": props.match.params.Id,
    //         "danhSachVe": danhSachGheDangDat,
    //         "taiKhoanNguoiDung": taiKhoan
    //     }


    //     Axios({
    //         url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
    //         method: 'POST',
    //         data: objectDatVe,
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`
    //         }
    //     }).then(res => {
    //         // console.log(res.data);
    //     }).catch(err => {
    //         console.log(err.response.data);
    //     })

    // }


    const Completionist = () => (
        swal("Hết thời gian đặt ghế vui lòng đặt ghế trong thời gian 5 phút,tiến hành đặt lại!!")
            .then((value) => {
                window.location.reload()
            })
    )

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            // Render a complete state

            return <Completionist />;

        } else {
            // Render a countdown
            return (<h4 style={{ color: 'orange' }}>{minutes}:{seconds}</h4>);
        }
    };
    const couter = 1000 * 60 * 5
    return (
        <section className="seatList">

            <div className="container">
                <div className="row  _countDown">
                    <div className="col">
                        <p className="demoText">
                            {
                                Object.entries(lstBookingTicket).map(([index, item]) => {
                                    return (
                                        item.tenCumRap
                                    )
                                })
                            }
                        </p>
                    </div>
                    <div className="col">

                        <div className="text_Normal">Thời gian giữ ghế:</div>
                        <Countdown
                            date={Date.now() + couter}
                            renderer={renderer}
                        />

                    </div>
                </div>

                <div className="row">

                    <div className="col-md-12 col-lg-8 col-xl-8 seatList_detail">

                        <div className="screen col-md-12 col-lg-8"></div>

                        <SeatList param={param} />

                        <div className="contentBottom ">
                            <div className="item">
                                <div className="seat"></div>
                                <p>Ghế chưa chọn</p>
                            </div>
                            <div className="item mt-2">
                                <div className="seatVip"></div>
                                <p>Ghếp Vip</p>
                            </div>
                            <div className="item">
                                <div className="seatBooking"></div>
                                <p>Ghếp đã có người chọn</p>
                            </div>
                            <div className="item">
                                <div className="seatSelect"></div>
                                <p>Ghếp đã đang chọn</p>
                            </div>
                        </div>

                    </div>

                    <PayList param={param} />

                </div>
            </div>
        </section >


    )
}

