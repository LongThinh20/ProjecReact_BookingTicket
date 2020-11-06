import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import usePageLoading from '../../../../Components/Hook/usePageLoading';
import { movieService } from '../../../../Service';


export default function SeatList(props) {


    const [loader, showLoader, hideLoader] = usePageLoading();
    let [lstBookingTicket, setlstBookingTicket] = useState({});
    // let [danhSachGheDangDat, setDanhSachGheDangDat] = useState([]);
    const dispatch = useDispatch();
    const danhSachGheDangDat = useSelector(state => state.movie.objBooking)

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

        console.log(ghe);
        let objDatVe = {
            'maGhe': ghe.maGhe,
            'giaVe': ghe.giaVe
        }

        // let danhSachGheDangDatUpdate = [...danhSachGheDangDat];
        // let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);
        // if (index !== -1) {
        //     danhSachGheDangDatUpdate.splice(index, 1);
        // } else {
        //     danhSachGheDangDatUpdate.push(ghe);
        // }


        dispatch({
            type: 'LSTBOOKING_TO_SEATLST',
            payload: objDatVe
        })
    }

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

    //render ListSeat
    const rowSeatLst = []

    for (let i = 65; i <= 74; i++) {

        rowSeatLst.push(String.fromCharCode(i))

    }
    let indexA = 0;
    //render ListSeat




    return (


        <>

            {
                rowSeatLst.map((row, index) => {
                    return (
                        <>
                            <button className="rowSeat" key={index}>{row}</button>

                            {

                                lstBookingTicket.danhSachGhe?.slice(indexA, indexA += 16).map((ghe, index) => {

                                    let i = index + 1;

                                    let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';

                                    let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);


                                    let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                    return (ghe.daDat ? <button key={index} className=" seatBooking">
                                        X </button>
                                        :
                                        <button key={index} onClick={() => { datGhe(ghe); booking(`${row}`, i, ghe.giaVe, ghe.loaiGhe, ghe.maGhe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                            {i}
                                        </button>)

                                })
                            }
                            <br />
                        </>
                    )
                })
            }
            {loader}
        </>




    )
}
