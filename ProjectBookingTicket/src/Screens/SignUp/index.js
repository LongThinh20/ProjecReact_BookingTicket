import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const signupUserSchema = yup.object().shape({
    taiKhoan: yup
        .string()
        .required("* Tài khoản không được rỗng !"),
    matKhau: yup
        .string()
        .required("* Mật khẩu không được rỗng !")
        .min(8, 'Mật khẩu ít nhất 8 kí tự'),
    hoTen: yup
        .string()
        .required("* Họ tên không được rỗng !")
        .min(5, 'Họ tên phải lớn hơn 5 kí tự')
        .max(10, 'HỌ tên phải nhỏ hơn 10 kí tự'),
    email: yup
        .string()
        .required("* Tài khoản không được rỗng !")
        .email("* Email không hợp lệ"),
    soDt: yup
        .string()
        .matches(/^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/,"Số điện thoại không hợp lệ"),
    maNhom: yup
        .string()
        .required("* Mã nhóm không để trống ")
})

class SignUp extends Component {
    _handleSubmit = values => {
        console.log(values)
    }
    render() {
        return (
            <div className="SignUp">
                <div className="container">
                    <h1>ĐĂNG KÍ</h1>
                    <Formik
                        initialValues={{
                            taiKhoan: "",
                            matKhau: "",
                            hoTen: "",
                            email: "",
                            soDt: "",
                            maNhom: "GP03"
                        }}
                        validationSchema={signupUserSchema}
                        onSubmit={this._handleSubmit
                        }
                        render={(formikProps) => (
                            <Form>
                                <div className="form-group">
                                    <label>Họ tên: </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="Họ và tên"
                                        name="hoTen"
                                        onChange={formikProps.handleChange}
                                    />
                                    <ErrorMessage name="hoTen">
                                        {msg => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>

                                </div>
                                <div className="form-group">
                                    <label>Tài khoản: </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="Tài khoản"
                                        name="taiKhoan"
                                        onChange={formikProps.handleChange}
                                    />
                                    <ErrorMessage name="taiKhoan">
                                        {msg => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu: </label>
                                    <Field
                                        type="password"
                                        className="form-control"
                                        placeholder="Mật khẩu"
                                        name="matKhau"
                                        onChange={formikProps.handleChange}
                                    />
                                    <ErrorMessage name="matKhau">
                                        {msg => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label>Email: </label>
                                    <Field
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        onChange={formikProps.handleChange}
                                    />
                                    <ErrorMessage name="email">
                                        {msg => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="Số điện thoại"
                                        name="soDt"
                                        onChange={formikProps.handleChange}
                                    />
                                    <ErrorMessage name="soDt">

                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label>Mã nhóm: </label>
                                    <Field
                                        component="select"
                                        className="form-control"
                                        placeholder="Chọn mã nhóm"
                                        name="maNhom"
                                        onChange={formikProps.handleChange}>
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
                                    </Field>
                                    <ErrorMessage name="maNhom">
                                        {msg => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <button className="text-center">
                                    <button type="submit" className="btn btn-success">ĐĂNG KÍ</button>
                                </button>
                            </Form>
                        )} ></Formik>
                </div>
            </div>

        )
    }
}

export default SignUp;