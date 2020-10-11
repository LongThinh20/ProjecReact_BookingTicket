import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment';
import Swal from 'sweetalert2';
import { movieService } from '../../../../Service';

export default function PayList(props) {

    let lstSeatBooking = useSelector(state => state.movie.lstSeatBooking);
    let [lstBookingTicket, setlstBookingTicket] = useState({});
    let [danhSachGheDangDat, setDanhSachGheDangDat] = useState([]);
const user = useSelector(state => state.user.credentials);




    useEffect(() => {

        movieService.fetchBookingTicket(props.param)
            .then(res => {

                setlstBookingTicket(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [JSON.stringify(lstBookingTicket)])


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
                    'Thanh toán hoàn tất!',
                    'Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi',
                    'success'
                ).then((value) => {
                    if (value) {
                        window.location.replace("/");
                    }
                });
                datVe()
            }
        })
    }

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

    return (
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

                        <div className=" pl-0">

                            <p className="text_Form_Title">
                                {
                                    Object.entries(lstBookingTicket).map(([index, item]) => {
                                        return (
                                            item.tenPhim
                                        )
                                    })
                                }
                            </p>
                            <div className="text_Normal">
                                {
                                    Object.entries(lstBookingTicket).map(([index, item]) => {
                                        return (
                                            item.tenCumRap
                                        )
                                    })
                                }
                            </div>
                            <div className="text_Normal">
                                {
                                    Object.entries(lstBookingTicket).slice(0, 1).map(([index, item]) => {
                                        return (
                                            <span className="text_Normal">{moment(item.ngayChieuGioChieu).format('DD.MM')} ~ <span className="text_Orange">{moment(item.ngayChieuGioChieu).format('hh:mm a')}</span></span>
                                        )
                                    })
                                } -
                                <span className="pl-2 text_Normal">
                                    {
                                        Object.entries(lstBookingTicket).map(([index, item]) => {
                                            return (item.tenRap)
                                        })
                                    }
                                </span>
                            </div>

                        </div>

                    </li>
                    <li className="list-group-item">

                        <div className="text_Form_Title">
                            Ghế: 
                        
                        {
                        lstSeatBooking?.map((item, index) => {
                            return (
                                <span key={index} className="text_Orange pr-2 ml-2">{item.rowSeat}{`${item.stt}`} - <span className="text_Green">{item.price.toLocaleString()}</span></span>
                            )
                        })
                    }
                        
                        </div>                      
                    </li>
                    <li className="list-group-item">
                        <div className="text_Normal">Email</div> 
                <div className="text_Form_Title">
                    {
                    user.email
                    
                    }
                    </div>
                    </li>
                    
                    <li className="list-group-item">
                        <div  className="text_Normal">Số điện thoại</div>
                            <div className="text_Form_Title">
                                {
                                    user.soDT
                                }
                            </div>

                    </li>
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col discountInput">
                                <div className="form-group">
                                <label htmlFor="usr" className="text_Normal">Mã giảm giá</label>
                                <input type="text" className="form-control" id="usr"  placeholder="Nhập mã tại đây ... "/>
                                </div>
                            </div>

                            <div className="col-4">
                                <button className="btn btn-success">Áp dụng</button>
                            </div>
                            
                        </div>
                    </li>
                    <li className="list-group-item">                  
                        <div className="text_Form_Title">
                              Hình thức thanh toán 
                        </div>
                        <div>
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio" />Thành toán qua ZaloPay
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio" />Vía, Master, JCB
                            </label>
                        </div>
                        <div className="form-check ">
                            <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio"  />Thẻ ATM nội địa
                            </label>
                        </div>
                        <div className="form-check ">
                            <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio"  />Thanh toán tại của hàng tiện ích 
                            </label>
                        </div>
                        </div>

                    </li>
                </ul>
            <div>
                
            </div>
            <div className="card-foot">
                <button onClick={() => { checkPay() }} className="button_Form bookingEdit">Đặt Vé</button>
            </div>
        </div>
        </div >
    )
}
