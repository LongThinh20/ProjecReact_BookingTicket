import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { movieService } from '../../../Service';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import button_ShowTime from '../../../Sass/Components/button_ShowTime.scss';
import text_Green from '../../../Sass/Components/text_Green.scss';

export default function DetailMovie1(props) {

   const [lstmovieDetail, setlstmovieDetail] = useState({});
   const [lstmovie, setlstmovie] = useState([]);
   console.log(lstmovie.heThongRapChieu);

   useEffect(() => {
      movieService.fetchMovieDetail(props.match.params.Id)
         .then(res => {
            let lstdetailMovie = res.data;
            setlstmovieDetail(lstdetailMovie)

         })
         .catch(err => {
            console.log(err.response.data)
         })
   }, []);

   const imgStyle = {
      backgroundImage: `url(${lstmovieDetail.hinhAnh})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'top center'
   }

   useEffect(() => {
      movieService.fetchShowtimeToIdMovie(props.match.params.Id)
         .then(res => {
            let array = res.data;
            setlstmovie(array);
         })
         .catch(err => {
            console.log(err.response.data)
         })
   }, [])


   return (
      <section className="detail" style={imgStyle}>
         <div className="container">
            <div className="backgroundMovie"></div>
            <div className="row">
               <div className="col-3 left_content">
                  <div className="button_Trailer">
                     <a href={lstmovieDetail.trailer} data-toggle="modal" data-target="#exampleModalCenter">
                        <i className="fa fa-play d-block" />
                     </a>
                  </div>

                  <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="htrue">
                     <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                           <iframe width="560" height="315" src={lstmovieDetail.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                     </div>
                  </div>

                  <div className="detail_Img">
                     <img src={lstmovieDetail.hinhAnh} ></img>
                  </div>

               </div>
               <div className="col right_content">
                  <h1> {lstmovieDetail.tenPhim}</h1>
                  <p>{moment(`${lstmovieDetail.ngayKhoiChieu}`).format('DD.MM.yyyy')}</p>
                  <p className="rating_Star">
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <span> {lstmovieDetail.danhGia}</span>
                  </p>

                  <button className="btn button_Cinema">ĐẶT VÉ</button>
               </div>
            </div>

            <div className="center_content">
               <ul className="nav nav-pills ">
                  <li className="nav-item">
                     <a className="nav-link active" data-toggle="pill" href="#home">LỊCH CHIẾU</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" data-toggle="pill" href="#menu1">THÔNG TIN</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" data-toggle="pill" href="#menu2">ĐÁNH GIÁ</a>
                  </li>
               </ul>

               <div className="tab-content">
                  <div className="tab-pane container active mt-4 content_showTime" id="home">
                     {/*  */}
                     <div className="row">
                        <div className="col-2">
                           <ul className="nav nav-pills flex-column ">
                              {
                                 lstmovie.heThongRapChieu?.map((item, index) => {
                                    return (
                                       <li className="nav-item">
                                          <a className="nav-link " data-toggle="pill" href={`#${item.maHeThongRap}`}>
                                             <img src={item.logo} style={{ height: '50px', width: '50px' }}></img>
                                          </a>
                                       </li>
                                    )
                                 })
                              }

                           </ul>
                        </div>
                        <div className="col">
                           <div className="tab-content">
                              {
                                 lstmovie.heThongRapChieu?.map((item, index) => {
                                    return (
                                       <div className="tab-pane container pt-4 pb-4" id={item.maHeThongRap}>
                                          {
                                             item.cumRapChieu?.map((item, index) => {
                                                return (
                                                   <div key={index}>
                                                      <h3 style={{ color: 'white' }}>{item.tenCumRap}</h3>
                                                      <p style={{ color: 'white' }}>271 Nguyễn Trãi, Q.1</p>
                                                      {item.lichChieuPhim?.slice(0, 12).map((item, index) => {
                                                         return <NavLink to={`/booking/${item.maLichChieu}`} className="button_ShowTime mr-2 mb-2"><span className="text_Green" style={{ fontSize: '13px' }}>{moment(item.ngayChieuGioChieu).format('DD.MM')}~</span> {moment(item.ngayChieuGioChieu).format('hh:mm a')}</NavLink>
                                                      })}
                                                   </div>
                                                )
                                             })
                                          }
                                       </div>
                                    )
                                 })
                              }

                           </div>
                        </div>
                     </div>


                     {/*  */}

                  </div>
                  <div className="tab-pane container fade mt-4" id="menu1">

                     <div className="row">
                        <div className="col-2">
                           <p>Ngày chiếu</p>
                           <p>Đạo diễn</p>
                           <p>Diễn viên</p>
                           <p>Định dạng</p>
                           <p>Quốc Giá SX</p>
                        </div>
                        <div className="col-3">
                           <p>{lstmovieDetail.ngayKhoiChieu}</p>

                        </div>
                        <div className="col">
                           <p>Nội dung</p>
                           <div>
                              {lstmovieDetail.moTa}
                           </div>
                        </div>
                     </div>

                  </div>
                  <div className="tab-pane container fade" id="menu2">...</div>
               </div>
            </div>



         </div>
      </section >
   )
}
