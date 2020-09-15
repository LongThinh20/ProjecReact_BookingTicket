import React, { Component } from 'react';
import { Form, Formik, Field } from 'formik';
import { connect } from 'react-redux'
import { login } from '../../../Redux/Actions/user';

class SignIn extends Component {
    render() {
        return (
            <div className="container mt-4 mb-4">
                <h1>Đăng nhập</h1>
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
                            <button className="btn btn-success">Đăng nhập</button>
                        </Form >
                    )}
                />

            </div>
        )
    }
}

export default connect()(SignIn);
