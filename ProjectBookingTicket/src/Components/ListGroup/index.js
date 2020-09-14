import React, { Component } from 'react';
import '../../Layouts/bookingTicket.scss';
import img from '../../img/cinemaIcon-3.png';
import img1 from '../../img/movie-3.jpg';
import button_Cinema from '../../Sass/Components/button_Cinema.scss';

export default class ListGroup extends Component {
    render() {
        return (
            <section className="bookingTicket">
                <div className="container">
                    <div className="row">
                        <div className="col-2 cinemaList">
                            <h4 className="cinemaTitle">CHỌN RẠP</h4>
                            <div className="cinemaList_content list-group" id="list-tab" role="tablist">
                                <a className="cinemaList_item list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
                                    <img className="Cinema_Icon" src={img} alt /></a>
                                <a className="cinemaList_item list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                    <img className="Cinema_Icon" src={img} alt /></a>
                                <a className="cinemaList_item list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">
                                    <img className="Cinema_Icon" src={img} alt /></a>
                                <a className="cinemaList_item list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">
                                    <img className="Cinema_Icon" src={img} alt /></a>
                            </div>
                        </div>
                        <div className="col-4 cinemaGroupList">
                            <h4 className="cinemaTitle">CHỌN CỤM RẠP</h4>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                    <div className="cinemaGroupList_content list-group" id="list-tab" role="tablist">
                                        <a className="cinemaGroupList_item list-group-item list-group-item-action active" id="list-home-list1" data-toggle="list" href="#list-home1" role="tab" aria-controls="home">
                                            <div>Tên rạp: <span>BHD Star Cineplex - 3/2</span></div>
                                            <div>Địa chỉ : <span>L5-Vincom 3/2, 3C Đường 3/2, Q.10</span></div>
                                        </a>
                                        <a className="cinemaGroupList_item list-group-item list-group-item-action" id="list-profile-list2" data-toggle="list" href="#list-profile2" role="tab" aria-controls="profile">
                                            <div>Tên rạp: <span>BHD Star Cineplex - 3/2</span></div>
                                            <div>Địa chỉ : <span>L5-Vincom 3/2, 3C Đường 3/2, Q.10</span></div>
                                        </a>
                                        <a className="cinemaGroupList_item list-group-item list-group-item-action" id="list-messages-list3" data-toggle="list" href="#list-messages3" role="tab" aria-controls="messages">
                                            <div>Tên rạp: <span>BHD Star Cineplex - 3/2</span></div>
                                            <div>Địa chỉ : <span>L5-Vincom 3/2, 3C Đường 3/2, Q.10</span></div>
                                        </a>
                                        <a className="cinemaGroupList_item list-group-item list-group-item-action" id="list-settings-list4" data-toggle="list" href="#list-settings4" role="tab" aria-controls="settings">
                                            <div>Tên rạp: <span>BHD Star Cineplex - 3/2</span></div>
                                            <div>Địa chỉ : <span>L5-Vincom 3/2, 3C Đường 3/2, Q.10</span></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">2
          </div>
                                <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">3
          </div>
                                <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">4
          </div>
                            </div>
                        </div>
                        <div className="col cinemaMovie">
                            <h4 className="cinemaTitle">CHỌN SUẤT</h4>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="cinemaMovie_content tab-pane fade show active" id="list-home1" role="tabpanel" aria-labelledby="list-home-list1">
                                    <div className="cinemaMovie_item row">
                                        <div className="col-2  cinemaMovie_img">
                                            <img src={img1} alt className="img-fluid ml-2" />
                                        </div>
                                        <div className="col cinemaMovie_detail">
                                            <h3>It's over</h3>
                                            <p className="mr-lg-2"><i className="fa fa-clock" /> THỜI GIAN : <span>120 phút</span></p>
                                            <a href="#" className="button_Cinema">14 : 45</a>
                                            <a href="#" className="button_Cinema">18 : 30</a>
                                            <a href="#" className="button_Cinema">14 : 45</a>
                                            <a href="#" className="button_Cinema">18 : 30</a>
                                        </div>
                                    </div>
                                    <div className="cinemaMovie_item row">
                                        <div className="col-2  cinemaMovie_img">
                                            <img src={img1} alt className="img-fluid ml-2" />
                                        </div>
                                        <div className="col cinemaMovie_detail">
                                            <h3>It's over</h3>
                                            <p className="mr-lg-2"><i className="fa fa-clock" /> THỜI GIAN : <span>120 phút</span></p>
                                            <a href="#" className="button_Cinema">14 : 45</a>
                                            <a href="#" className="button_Cinema">18 : 30</a>
                                            <a href="#" className="button_Cinema">14 : 45</a>
                                            <a href="#" className="button_Cinema">18 : 30</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="list-profile2" role="tabpanel" aria-labelledby="list-profile-list2">
                                    2.1
          </div>
                                <div className="tab-pane fade" id="list-messages3" role="tabpanel" aria-labelledby="list-messages-list3">3.1
          </div>
                                <div className="tab-pane fade" id="list-settings4" role="tabpanel" aria-labelledby="list-settings-list4">4.1
          </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
