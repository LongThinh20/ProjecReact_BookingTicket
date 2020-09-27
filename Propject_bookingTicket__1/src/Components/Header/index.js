import { template } from 'lodash';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../img/logo.svg';
import '../../Layouts/header.scss';
import { connect } from 'react-redux';



class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header_account text-right">
                        <span className="account_icon"><i className=" fa fa-user-circle mr-2" /></span>
                        <div type=" button" className="account_detail btn dropdown-toggle" data-toggle="dropdown">
                            ..............</div>
                        <div className="dropdown-menu">
                            <a className="acount_logout dropdown-item" href="#">Thông tin cá nhân</a>
                            <a className="acount_logout dropdown-item " href="#">Đăng xuất</a>
                        </div>
                    </div>
                    <nav className=" header__nav navbar navbar-expand-md navbar-dark ">
                        <NavLink className="navbar-brand header-img" to="/">
                            <img src={img} className="img-fluid" />
                        </NavLink>
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
                                    <NavLink className="nav-link" to="/booking">MUA VÉ</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeStyle={{ color: 'orange' }} to="/signin" >ĐĂNG NHẬP</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeStyle={{ color: 'orange' }} to="/signup" >ĐĂNG KÍ</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        )
    }
}
// const mapStateToProps = state=>{
//     return{
//         credentials : state.user.credentials
//     }
// }


export default connect(null)(Header);