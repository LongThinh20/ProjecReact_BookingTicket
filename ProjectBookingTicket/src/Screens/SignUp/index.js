import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { userService } from '../../Service';
import {signupUserSchema} from '../../Service/user';


class SignUp extends Component {
    _handleSubmit = values => {
        userService.signUp(values).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
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
                                        {msg => <div className="alert alert-danger">{msg}</div>}
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