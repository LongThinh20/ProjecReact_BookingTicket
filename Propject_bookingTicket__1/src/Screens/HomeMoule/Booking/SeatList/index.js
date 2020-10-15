import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import usePageLoading from '../../../../Components/Hook/usePageLoading';
import { movieService } from '../../../../Service';


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

    let datGhe = (ghe) => {

        let danhSachGheDangDatUpdate = [...danhSachGheDangDat];
        let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);
        if (index !== -1) {
            danhSachGheDangDatUpdate.splice(index, 1);
        } else {
            danhSachGheDangDatUpdate.push(ghe);
        }
        setDanhSachGheDangDat(danhSachGheDangDatUpdate)
    }

    const dispatch = useDispatch();

    const booking = (rowSeat, stt, price, type, id) => {

        let lstSeatBooking = {
            rowSeat: rowSeat,
            stt: stt,
            price: price,
            type: type,
            id: id

        }

        dispatch({
            type: 'CHECK_SEAT_BOOKING',
            payload: lstSeatBooking
        })


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
                                <button key={index} onClick={() => { datGhe(ghe); booking(`${A}`, i, ghe.giaVe, ghe.loaiGhe, ghe.maGhe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
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
                                <button key={index} onClick={() => { datGhe(ghe); booking(`${B}`, i, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
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
                                <button key={index} onClick={() => { datGhe(ghe); booking(`${C}`, i, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
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
                                <button key={index} onClick={() => { datGhe(ghe); booking(`${D}`, i, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
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
                                <button key={index} onClick={() => { datGhe(ghe); booking(`${E}`, i, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
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
                                <button key={index} onClick={() => { datGhe(ghe); booking(`${F}`, i, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
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
                                <button key={index} onClick={() => { datGhe(ghe); booking(`${G}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
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
                                <button key={index} onClick={() => { datGhe(ghe); booking(`${H}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
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
                                <button key={index} onClick={() => { datGhe(ghe); booking(`${I}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
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
                                <button key={index} onClick={() => { datGhe(ghe); booking(`${J}`, ghe.stt, ghe.giaVe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {ghe.stt}
                                </button>
                        })
                    }
                </td>
            </tr>
            {loader}
        </table>


    )
}
