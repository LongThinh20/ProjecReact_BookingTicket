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
import Swal from 'sweetalert2'
import Countdown from 'react-countdown-now';
import swal from 'sweetalert';


import React, { useEffect, useState } from 'react'
import { movieService } from '../../../Service';
import Axios from 'axios';
import { date, object } from 'yup';
import SeatList from './SeatList';
import { useDispatch, useSelector } from 'react-redux';
import countDownComponent from '../../../Components/countDownComponent';
import { Fade } from 'react-bootstrap';

export default function Booking(props) {

    const A = 'A';
    const B = 'B';
    const C = 'C';
    const D = 'D';
    const E = 'E';
    const F = 'F';
    const G = 'G';
    const H = 'H';
    const I = 'I';
    const J = 'J';

    let [lstBookingTicket, setlstBookingTicket] = useState({});
    let [danhSachGheDangDat, setDanhSachGheDangDat] = useState([]);
    let lstSeatBooking = useSelector(state => state.movie.lstSeatBooking);



    useEffect(() => {
        movieService.fetchBookingTicket(props.match.params.Id)
            .then(res => {

                setlstBookingTicket(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [JSON.stringify(lstBookingTicket)])

    let datGhe = (rowSeat, ghe) => {
        //Kiểm tra trong mảng ghế đang đặt có ghế vừa click không
        //Nếu có: => remove ra khỏi mảng
        //Nếu chưa có: => push vào mảng


        let danhSachGheDangDatUpdate = [...danhSachGheDangDat];
        let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);
        if (index != -1) {
            danhSachGheDangDatUpdate.splice(index, 1);
        } else {
            danhSachGheDangDatUpdate.push(ghe, rowSeat);
        }

        setDanhSachGheDangDat(danhSachGheDangDatUpdate)
    }

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

    const dispatch = useDispatch();
    const booking = (rowSeat, ghe, price) => {


        let lstSeatBooking = {
            rowSeat: rowSeat,
            stt: ghe,
            price: price
        }
        dispatch({
            type: 'CHECK_SEAT_BOOKING',
            payload: lstSeatBooking
        })
    }


    // let seatList = (item) => {

    //     let lstSeatUpdate = [...lstSeatBooking];
    //     let index = lstSeatUpdate.findIndex(seat => seat.stt === item.stt);
    //     if (index != -1) {
    //         lstSeatUpdate.splice(index, 1);
    //     } else {
    //         lstSeatUpdate.push(item);
    //     }

    //     setlstSeatBooking(lstSeatUpdate);

    // }
    const datVe = () => {
        let taiKhoan = JSON.parse(localStorage.getItem('credentials')).taiKhoan
        console.log((taiKhoan));

        let objectDatVe = {
            "maLichChieu": props.match.params.maLichChieu,
            "danhSachVe": danhSachGheDangDat,
            "taiKhoanNguoiDung": taiKhoan
        }

        localStorage.setItem('obj', JSON.stringify(objectDatVe))

    }

    const checkPay = () => {
        Swal.fire({
            title: 'Bạn có chắc muốn thanh toán không',
            icon: 'info',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'THANH TOÁN'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'THANH TOÁN HOÀN TẤT!',
                    'Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi',
                    'success'
                ).then((value) => {
                    if (value) {
                        // window.location.replace("/");
                    }
                });
                datVe()
            }
        })
    }

    const Completionist = () => (
        swal("Hết thời gian đặt ghế vui lòng đặt ghế trong thời gian 5 phút,tiến hành đặt lại!!")
            .then((value) => {
                window.location.reload()
            })
    )

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            // Render a complete state
            console.log(completed);
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <h4 style={{ color: 'orange' }}>{minutes}:{seconds}</h4>);
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

                        <div className="screen col-12"></div>
                        <table style={{ margin: 'auto' }}>

                            <tr>
                                <td className="rowSeat">{A}</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(0, 16).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(`${A}`, ghe); booking(`${A}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="rowSeat">{B}</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(16, 32).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';


                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(`${B}`, ghe); booking(`${B}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="rowSeat">{C}</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(32, 48).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(`${C}`, ghe); booking(`${C}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="rowSeat">{D}</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(48, 64).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(`${D}`, ghe); booking(`${D}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="rowSeat">{E}</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(64, 80).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(`${E}`, ghe); booking(`${E}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="rowSeat">{F}</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(80, 96).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(`${F}`, ghe); booking(`${F}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="rowSeat">{G}</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(96, 112).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(`${G}`, ghe); booking(`${G}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="rowSeat">{H}</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(112, 128).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(`${H}`, ghe); booking(`${H}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="rowSeat">{I}</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(128, 144).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);
                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(`${I}`, ghe); booking(`${I}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="rowSeat">{J}</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(144, 160).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(`${J}`, ghe); booking(`${J}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>

                        </table>

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

                    <div className="col-md-12 col-lg-4 contentRight ">
                        <div className="card ">
                            <div className="card-header totalCost">
                                {
                                    lstSeatBooking.reduce((total, lst, index) => {
                                        return total += lst.price
                                    }, 0).toLocaleString()
                                } đ </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="text_Form_Title">Tên phim : </div>
                                        </div>
                                        <div className="col pl-0">


                                            <div className="text_Normal">
                                                {
                                                    Object.entries(lstBookingTicket).map(([index, item]) => {
                                                        return (
                                                            item.tenPhim
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="text_Form_Title">Cụm rạp : </div>
                                        </div>
                                        <div className="col pl-0">
                                            <div className="text_Normal">
                                                {
                                                    Object.entries(lstBookingTicket).map(([index, item]) => {
                                                        return (
                                                            item.tenCumRap
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="text_Form_Title">Ghế</div>
                                        </div>
                                        <div className="col pl-0">
                                            {
                                                lstSeatBooking?.map((item, index) => {
                                                    return (
                                                        <span className="text_Orange mr-2">{item.rowSeat}{`${item.stt}`} - <span className="text_Green">{item.price.toLocaleString()
                                                        }</span></span>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="text_Form_Title">Rạp : </div>
                                        </div>
                                        <div className="col pl-0">
                                            <div className="text_Normal">
                                                {
                                                    Object.entries(lstBookingTicket).map(([index, item]) => {
                                                        return (item.tenRap)
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="text_Form_Title">Ngày chiếu : và giờ chiếu </div>
                                        </div>
                                        <div className="col pl-0">
                                            {
                                                Object.entries(lstBookingTicket).slice(0, 1).map(([index, item]) => {
                                                    return (
                                                        <div className="text_Normal">{moment(item.ngayChieuGioChieu).format('DD.MM')} ~ <span className="text_Orange">{moment(item.ngayChieuGioChieu).format('hh:mm a')}</span></div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="card-foot">
                                <button onClick={() => { checkPay() }} className="button_Form bookingEdit">Đặt Vé</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
}

