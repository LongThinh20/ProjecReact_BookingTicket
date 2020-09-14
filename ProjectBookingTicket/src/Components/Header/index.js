import React, { Component } from 'react';
import img from '../../img/logo.svg';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header_account text-right">
                        <span className="account_icon"><i className=" fa fa-user-circle mr-2" /></span>
                        <div type=" button" className="account_detail btn dropdown-toggle" data-toggle="dropdown">
                            Nguyễn Văn Tí
      </div>
                        <div className="dropdown-menu">
                            <a className="acount_logout dropdown-item" href="#">Thông tin cá nhân</a>
                            <a className="acount_logout dropdown-item " href="#">Đăng xuất</a>
                        </div>
                    </div>
                    <nav className=" header__nav navbar navbar-expand-md navbar-dark ">
                        <a className="navbar-brand header-img" href="#">
                            <img src= {img} alt className="img-fluid" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#movieNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="movieNavbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">PHIM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">LỊCH CHIẾU</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">MUA VÉ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-toggle="modal" data-target="#logIn" data-whatever="@getbootstrap">ĐĂNG NHẬP</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-toggle="modal" data-target="#signUp" data-whatever="@getbootstrap">ĐĂNG KÍ</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        )
    }
}
