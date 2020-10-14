



import React from "react";
import { useForm } from "react-hook-form";
import '../../../../Sass/Components/button_Form.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupUserSchema } from "../../../../Service/user";
import { useSelector } from "react-redux";




export default function ChangePassword() {

    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(signupUserSchema)
    });
    const onSubmit = values => {
        console.log(values);
    }
    const credentials = useSelector(state => state.user.credentials);




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
                        placeholder="Enter email"
                        ref={register}
                        className={`form-control ${errors.hoTen ? "is-invalid" : ""}`}
                        defaultValue={credentials.hoTen}
                    // onClick={setValue("hoTen", credentials.hoTen)}
                    />
                    <p className="invalid-feedback" name="hoTen">{errors.hoTen?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="taiKhoan">Tài khoản</label>
                    <input
                        type="text"
                        name="taiKhoan"
                        placeholder="Enter email"
                        ref={register}
                        className={`form-control ${errors.taiKhoan ? "is-invalid" : ""}`}
                        defaultValue={credentials.taiKhoan}
                    // onClick={setValue("taiKhoan", credentials.taiKhoan)}
                    />
                    <p className="invalid-feedback" name="taiKhoan">{errors.taiKhoan?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Mật khẩu </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        ref={register}
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        defaultValue="******"
                    // onClick={setValue("password", "***********")}
                    />
                    <p className="invalid-feedback" name="password">{errors.password?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        ref={register}
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        defaultValue={credentials.email}
                    // onClick={setValue("email", credentials.email)}
                    />
                    <p className="invalid-feedback" name="email">{errors.email?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Số điện thoại</label>
                    <input
                        name="soDT"
                        type="text"
                        ref={register}
                        className={`form-control ${errors.soDT ? "is-invalid" : ""}`}
                        defaultValue={credentials.soDT}
                    // onClick={setValue("soDT", credentials.soDT)}
                    />
                    <p className="invalid-feedback" name="soDT">{errors.soDT?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Mã nhóm</label>
                    <select
                        name="maNhom"
                        className={`form-control ${errors.maNhom ? "is-invalid" : ""}`}
                        ref={register}
                    // value="GP03"
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

                <div className="forgotPass text-info"><a>Quên mật khẩu hiện tại ??</a></div>
            </form>
        </div>
    );
};

