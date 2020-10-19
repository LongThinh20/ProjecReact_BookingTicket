
import React from "react";
import { useForm } from "react-hook-form";
import '../../../../Sass/Components/button_Form.scss';
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import Axios from "axios";
import { update } from "../../../../Redux/Actions/user";


export default function ModalForm() {
    const credentials = useSelector(state => state.user.credentials);
    const { register, errors, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (values) => {

        dispatch(update(values, credentials.accessToken));

        Axios({
            method: "PUT",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            data: values,
            headers: {
                'Authorization': `Bearer ${credentials.accessToken}`
            }
        }).then(res => {
            Swal.fire({
                title: 'Cập nhật thành công !!',
                icon: 'success',
                confirmButtonText: 'OK',
                showCancelButton: false,
                showCloseButton: true
            }).then((result) => {
                if (result) {

                } else {

                }
            })
            console.log(res.data);
        }).catch(err => {
            Swal.fire({
                title: 'Cập nhật thất bại  thành công !!',
                text: `${err.response.data}`,
                icon: 'error',
                confirmButtonText: 'OK',
                showCancelButton: false,
                showCloseButton: true
            })
        })
    }


    return (
        <div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>THAY ĐỔI MẬT KHẨU</h3>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="hoTen">Họ tên</label>
                    <input
                        type="text"
                        name="hoTen"
                        placeholder="Nhập họ và tên"
                        ref={register({
                            required: "Họ Tên không được rỗng !!"
                        })}
                        className={`form-control ${errors.hoTen ? "is-invalid" : ""}`}
                        defaultValue={credentials === null ? "" : credentials.hoTen}

                    />
                    <p className="invalid-feedback" name="hoTen">{errors.hoTen?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="taiKhoan">Tài khoản</label>
                    <input
                        type="text"
                        name="taiKhoan"
                        placeholder="Nhập tài khoản "
                        ref={register({
                            required: "Tài khoản không được rỗng !!"
                        })}
                        className={`form-control ${errors.taiKhoan ? "is-invalid" : ""}`}
                        defaultValue={credentials === null ? "" : credentials.taiKhoan}

                    />
                    <p className="invalid-feedback" name="taiKhoan">{errors.taiKhoan?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Mật khẩu </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Nhập password"
                        ref={register({
                            required: "Mật khẩu không được rỗng !!"
                        })}
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        defaultValue="******"

                    />
                    <p className="invalid-feedback" name="password">{errors.password?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Nhập email"
                        ref={register({
                            required: "Email không được rỗng !!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Email không hợp lệ !!"
                            }
                        })}
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        defaultValue={credentials === null ? "" : credentials.email}
                    />
                    <p className="invalid-feedback" name="email">{errors.email?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Số điện thoại</label>
                    <input
                        name="soDT"
                        type="text"
                        placeholder="Nhập số điện thoại"
                        ref={register({
                            required: "Số điện thoại không được rỗng !!",
                            pattern: {
                                value: /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/,
                                message: "Số điện thoại không hợp lệ !!"
                            }
                        })}
                        className={`form-control ${errors.soDT ? "is-invalid" : ""}`}
                        defaultValue={credentials === null ? "" : credentials.soDT}
                    />
                    <p className="invalid-feedback" name="soDT">{errors.soDT?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="maLoaiNguoiDung">Loại người dùng </label>
                    <input
                        name="maLoaiNguoiDung"
                        type="text"
                        placeholder=""
                        ref={register}
                        className={`form-control ${errors.maLoaiNguoiDung ? "is-invalid" : ""}  `}
                        defaultValue={credentials === null ? "" : credentials.maLoaiNguoiDung}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="email">Mã nhóm</label>
                    <select
                        name="maNhom"
                        className={`form-control ${errors.maNhom ? "is-invalid" : ""}`}
                        ref={register({
                            required: "Mã không được rỗng !!"
                        })}
                        defaultValue={credentials === null ? "" : credentials.maNhom}

                    >
                        <option>GP01</option>
                        <option>GP02</option>
                        <option>GP03</option>
                        <option>GP04</option>
                        <option>GP05</option>
                        <option>GP06</option>
                        <option>GP07</option>
                        <option>GP08</option>
                        <option>GP09</option>
                        <option>GP10</option>
                    </select>
                    <p className="invalid-feedback" name="maNhom">{errors.maNhom?.message}</p>
                </div>
                <div>
                    <button type="submit" className="btn button_Form" >HOÀN TẤT</button>
                </div>
                <div className="forgotPass text-info"><a href="/#">Quên mật khẩu hiện tại ??</a></div>
            </form>
        </div>
    );
};

