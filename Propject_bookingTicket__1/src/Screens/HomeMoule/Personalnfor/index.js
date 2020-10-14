import React from 'react';
import { useSelector } from 'react-redux';
import '../../../Layouts/PersonalInfo.scss';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import '../../../Sass/Components/text_Orange.scss';
import '../../../Sass/Components/button_Form.scss';
import ChangePassword from './ChangePassword';


export default function PersonalInfo() {

    

    const credentials = useSelector(state => state.user.credentials);

    return (
        <section className="PersonalInfo">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card text-left text-center">

                            <div className="avatar_Info mt-4">
                                <Avatar
                                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                                    icon={<AntDesignOutlined />}
                                />
                            </div>
                            <div className="card-body">
                                {
                                    credentials !== null ?
                                        <h5 class="card-title">Xin chào <span className="text_Orange">{credentials.hoTen}</span> !!</h5>
                                        : <h5 class="card-title">Xin chào <span className="text_Orange">............</span> !!</h5>

                                }


                                <ul className="nav nav-pills mb-3  flex-column" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Thông tin cá nhân</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Đổi mật khẩu </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Lịch sử đặt vé</a>
                                    </li>
                                </ul>
                            </div>
                        </div>



                    </div>
                    <div className="col">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="personal_Info">
                                    <h3>THÔNG TIN CÁ NHÂN</h3>
                                    <table class="table">

                                        <tbody>
                                            <tr>
                                                <td>Tài khoản</td>

                                                <td>{credentials.taiKhoan}</td>
                                            </tr>
                                            <tr>
                                                <td>Số điện thoại</td>
                                                <td>{credentials.soDT}</td>
                                            </tr>
                                            <tr>
                                                <td>Họ và tên</td>
                                                <td>{credentials.hoTen}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{credentials.email}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                                <ChangePassword />
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <div className="history_Info">
                                    <h3>LỊCH SỬ ĐẶT VÉ</h3>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Tài khoản</th>
                                                <th>Họ và tên</th>
                                                <th>Email</th>
                                                <th>Số điện thoại</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{credentials.taiKhoan}</td>
                                                <td>{credentials.hoTen}</td>
                                                <td>{credentials.email}</td>
                                                <td>{credentials.soDT}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div>
                                        {/* Button trigger modal */}
                                        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                                            Launch
  </button>
                                        {/* Modal */}
                                        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Modal title</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <ChangePassword />
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}


