import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import usePageLoading from '../../../../Components/Hook/usePageLoading';
import { movieService } from '../../../../Service';
import Swal from 'sweetalert2'

export default function SeatList(props) {

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

    const [loader, showLoader, hideLoader] = usePageLoading();

    let [lstBookingTicket, setlstBookingTicket] = useState({});
    let [danhSachGheDangDat, setDanhSachGheDangDat] = useState([]);
    const [lstCheck, setlstCheck] = useState([]);



    const showErr = () => {
        Swal.fire({
            // title: 'Bạn không thể bỏ trống 1 ghế ở đầu mỗi dãy',
            text: "Bạn không thể bỏ trống 1 ghế ở đầu mỗi dãy",
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )
            }
        })
    }
    useEffect(() => {
        showLoader();

        movieService.fetchBookingTicket(props.param)
            .then(res => {

                hideLoader();

                setlstBookingTicket(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [JSON.stringify(lstBookingTicket)])

    let datGhe = (rowSeat, ghe) => {

        let danhSachGheDangDatUpdate = [...danhSachGheDangDat];
        let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);
        if (index !== -1) {
            danhSachGheDangDatUpdate.splice(index, 1);
        } else {
            danhSachGheDangDatUpdate.push(ghe, rowSeat);
        }

        setDanhSachGheDangDat(danhSachGheDangDatUpdate)
    }

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



    let checking = (stt) => {

        let lstUpdate = [...lstCheck];

        let index = lstUpdate.findIndex(e => e === stt);
        if (index !== -1) {
            lstUpdate.splice(index, 1);
        } else {
            lstUpdate.push(stt);
        }

        setlstCheck(lstUpdate);

    }

    if (lstCheck[0] === 2 || lstCheck[0] === 15) {
        showErr();
    } else if (lstCheck[0] === 1 && lstCheck[1] === 3) {
        showErr()
    } else if (lstCheck[0] === 3 && (lstCheck[1] === 5 || lstCheck[1] === 1)) {
        showErr()
    } else if (lstCheck[0] === 4 && (lstCheck[1] === 2) || lstCheck[1] === 6) {
        showErr()
    }


    return (

        <table style={{ margin: 'auto' }}>

            <tr>
                <td className="rowSeat">{A}</td>
                <td>
                    {


                        lstBookingTicket.danhSachGhe?.slice(0, 16).map((ghe, index) => {

                            let i = index + 1;

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';

                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);


                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return (ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { checking(i); datGhe(`${A}`, ghe); booking(`${A}`, i, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {i}
                                </button>)



                        })

                    }
                </td>
            </tr>
            <tr>
                <td className="rowSeat">{B}</td>
                <td>
                    {
                        lstBookingTicket.danhSachGhe?.slice(16, 32).map((ghe, index) => {

                            let i = index + 1;

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';

                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(`${B}`, ghe); booking(`${B}`, i, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {i}
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

                            let i = index + 1;

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(`${C}`, ghe); booking(`${C}`, i, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {i}
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

                            let i = index + 1;

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';

                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(`${D}`, ghe); booking(`${D}`, i, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {i}
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

                            let i = index + 1;

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';

                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(`${E}`, ghe); booking(`${E}`, i, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {i}
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

                            let i = index + 1;

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';

                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(`${F}`, ghe); booking(`${F}`, i, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {i}
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


    )
}
