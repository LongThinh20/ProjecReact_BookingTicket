import React from 'react';
import { useSelector } from 'react-redux';
import '../../../Layouts/PersonalInfo.scss';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import '../../../Sass/Components/text_Orange.scss';
import '../../../Sass/Components/button_Form.scss';
import '../../../Sass/Components/text_Form_Title.scss'
import ModalForm from './ModalForm';



export default function PersonalInfo() {

   const credentials = useSelector(state => state.user.credentials);

   const lstBooking = JSON.parse(localStorage.getItem('thongTinDatVe'));

   return (
      <section className="PersonalInfo">
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-4 avatar_Info">
                  <div className="card text-left text-center">
                     <div className="avatar_Info mt-4">
                        <Avatar
                           size={{ xs: 60, sm: 60, md: 80, lg: 80, xl: 80, xxl: 100 }}
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
                              <a className="nav-link active " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Thông tin cá nhân</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link " id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Lịch sử đặt vé</a>
                           </li>
                        </ul>
                     </div>
                  </div>

               </div>
               <div className="col-12 col-lg">
                  <div className="tab-content" id="pills-tabContent">
                     <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="personal_Info">
                           <h3>THÔNG TIN CÁ NHÂN</h3>
                           <table class="table">

                              <tbody>
                                 <tr>
                                    <td className="text_Form_Title left_Info">Tài khoản :</td>
                                    <td className="text-secondary">{credentials === null ? "" : credentials.taiKhoan}</td>
                                 </tr>
                                 <tr>
                                    <td className="text_Form_Title left_Info">Số điện thoại : </td>
                                    <td className="text-secondary">{credentials === null ? "" : credentials.soDT}</td>
                                 </tr>
                                 <tr>
                                    <td className="text_Form_Title left_Info">Họ và tên :</td>
                                    <td className="text-secondary">{credentials === null ? "" : credentials.hoTen}</td>
                                 </tr>
                                 <tr>
                                    <td className="text_Form_Title left_Info">Email : </td>
                                    <td className="text-secondary">{credentials === null ? "" : credentials.email}</td>
                                 </tr>
                              </tbody>
                           </table>
                           {
                              credentials === null ? <button type="button" className="btn  button_Form" data-toggle="modal" data-target="#modelId" disabled>CẬP NHẬT THÔNG TIN</button>
                                 : <button type="button" className="btn  button_Form" data-toggle="modal" data-target="#modelId">CẬP NHẬT THÔNG TIN</button>
                           }

                        </div>
                        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                           <div className="modal-dialog" role="document">

                              <div className="modal-content">
                                 <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                       <span aria-hidden="true">×</span>
                                    </button>
                                 </div>
                                 <div className="modal-body">
                                    < ModalForm />
                                 </div>

                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                     </div>
                     <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="history_Info">
                           <h3>LỊCH SỬ ĐẶT VÉ</h3>
                           <table class="table">
                              <thead>
                                 <tr>
                                    <th>STT</th>
                                    <th>Tên phim</th>
                                    <th>ID</th>
                                    <th>Ngày & giờ chiếu </th>
                                    <th>Thông Tin đặt ghế</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {credentials === null ? "" :
                                    lstBooking.map((item, index) => {

                                       return (item.taiKhoanNguoiDung === credentials.taiKhoan) ?
                                          (
                                             <tr>
                                                <td className="text-center font-weight-bold">{index + 1}</td>
                                                <td>{item.lst.tenPhim}</td>
                                                <td>{item.lst.maLichChieu}</td>
                                                <td>{item.lst.ngayChieu} - {item.lst.gioChieu}</td>
                                                <td>
                                                   <tr className="title_Info">
                                                      <th>STT</th>
                                                      <th>Ghế</th>
                                                      <th>Loại ghế</th>
                                                      <th>Giá</th>
                                                   </tr>
                                                   {item.lst.danhSachVe.map((item, index) => {
                                                      return (
                                                         <tr>
                                                            <td className="font-weight-bold">{index + 1}</td>
                                                            <td>{item.rowSeat}{item.stt}</td>
                                                            <td>{item.type === 'Thuong' ? 'Thường' : 'Vip'}</td>
                                                            <td>{item.price.toLocaleString()} đ</td>
                                                         </tr>
                                                      )
                                                   })}
                                                </td>
                                             </tr>

                                          )
                                          : ("")

                                    })
                                 }
                              </tbody>
                           </table>
                           <div>
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


