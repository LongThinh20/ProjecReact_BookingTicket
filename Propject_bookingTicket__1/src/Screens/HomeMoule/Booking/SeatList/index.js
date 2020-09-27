import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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

    let [lstBookingTicket, setlstBookingTicket] = useState({});
    let [danhSachGheDangDat, setDanhSachGheDangDat] = useState([]);
    let [lstSeatRow, setlstSeatRow] = useState([]);

    const dispatch = useDispatch();


    useEffect(() => {
        movieService.fetchBookingTicket(props.Id)
            .then(res => {
                setlstBookingTicket(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [JSON.stringify(lstBookingTicket)])

    let datGhe = (ghe) => {

        let danhSachGheDangDatUpdate = [...danhSachGheDangDat];
        let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);
        if (index != -1) {
            danhSachGheDangDatUpdate.splice(index, 1);
        } else {
            danhSachGheDangDatUpdate.push(ghe);
        }

        setDanhSachGheDangDat(danhSachGheDangDatUpdate)
    }

    const checkSeatRow = (seatRow) => {
        let lstSeatRowUpdate = [...lstSeatRow];
        lstSeatRowUpdate.push(seatRow);
        console.log(lstSeatRowUpdate);
    }


    return (
        <table style={{ margin: 'auto' }}>

            <tr>
                <td>{A}</td>
                <td>
                    {
                        lstBookingTicket.danhSachGhe?.slice(0, 16).map((ghe, index) => {

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(ghe); checkSeatRow(`${A}`) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {ghe.stt}
                                </button>
                        })
                    }
                </td>
            </tr>
            <tr>
                <td>{B}</td>
                <td>
                    {
                        lstBookingTicket.danhSachGhe?.slice(16, 32).map((ghe, index) => {

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {ghe.stt}
                                </button>
                        })
                    }
                </td>
            </tr>
            <tr>
                <td>{D}</td>
                <td>
                    {
                        lstBookingTicket.danhSachGhe?.slice(32, 48).map((ghe, index) => {

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {ghe.stt}
                                </button>
                        })
                    }
                </td>
            </tr>
            <tr>
                <td>{C}</td>
                <td>
                    {
                        lstBookingTicket.danhSachGhe?.slice(48, 64).map((ghe, index) => {

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {ghe.stt}
                                </button>
                        })
                    }
                </td>
            </tr>
            <tr>
                <td>{D}</td>
                <td>
                    {
                        lstBookingTicket.danhSachGhe?.slice(64, 80).map((ghe, index) => {

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {ghe.stt}
                                </button>
                        })
                    }
                </td>
            </tr>
            <tr>
                <td>{E}</td>
                <td>
                    {
                        lstBookingTicket.danhSachGhe?.slice(80, 96).map((ghe, index) => {

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {ghe.stt}
                                </button>
                        })
                    }
                </td>
            </tr>
            <tr>
                <td>{F}</td>
                <td>
                    {
                        lstBookingTicket.danhSachGhe?.slice(96, 112).map((ghe, index) => {

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {ghe.stt}
                                </button>
                        })
                    }
                </td>
            </tr>
            <tr>
                <td>{G}</td>
                <td>
                    {
                        lstBookingTicket.danhSachGhe?.slice(112, 128).map((ghe, index) => {

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {ghe.stt}
                                </button>
                        })
                    }
                </td>
            </tr>
            <tr>
                <td>{H}</td>
                <td>
                    {
                        lstBookingTicket.danhSachGhe?.slice(128, 144).map((ghe, index) => {

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {ghe.stt}
                                </button>
                        })
                    }
                </td>
            </tr>
            <tr>
                <td>{I}</td>
                <td>
                    {
                        lstBookingTicket.danhSachGhe?.slice(144, 160).map((ghe, index) => {

                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                X </button>
                                :
                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                    {ghe.stt}
                                </button>
                        })
                    }
                </td>
            </tr>

        </table>
    )
}
