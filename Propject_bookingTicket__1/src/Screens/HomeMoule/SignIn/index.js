import React, { Component } from 'react';
import { Form, Formik, Field } from 'formik';
import { connect } from 'react-redux'
import { login } from '../../../Redux/Actions/user';
import  '../../../Layouts/signIn.scss';
import button_Form from '../../../Sass/Components/button_Form.scss'

class SignIn extends Component {
    render() {
        return (
            <section className="signIn">
                <div className="signIn_Content mt-4 mb-4">
                    <h1>ĐĂNG NHẬP</h1>
                    <Formik
                        initialValues={{
                            taiKhoan: "",
                            matKhau: ""
                        }}
                        onSubmit={(values) => {
                            this.props.dispatch(login(values))
                        }}
                        render={({ handleChange }) => (
                            <Form>
                                <div className="form-group">
                                    <label label > Tài khoản: </label>
                                    <Field
                                        type="text"
                                        name="taiKhoan"
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div >
                                <div className="form-group">
                                    <label>Mật khẩu: </label>
                                    <Field
                                        type="password"
                                        name="matKhau"
                                        onChange={handleChange}
                                        className="form-control" />
                                </div>
                                <button className="btn button_Form">Đăng nhập</button>
                            </Form >
                        )}
                    />

                </div>
            </section>
        )
    }
}

export default connect()(SignIn);
