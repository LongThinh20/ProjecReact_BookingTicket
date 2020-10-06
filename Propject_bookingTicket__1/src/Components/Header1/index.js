import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import img from '../../img/logo.svg';
import '../../Layouts/header.scss';
import useScrollTop from 'react-hook-scrolltop';
import useScrollInfo from 'react-element-scroll-hook';
import Swal from 'sweetalert2'

export default function Header1() {
    const credentials = useSelector(state => state.user.credentials);

    const isTopOfPage = useScrollTop();

    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch({
            type: 'DELETE_ACCOUNT'
        })
    }
    const checkSignOut = () => {
        Swal.fire({
            title: 'Bạn có chắc muốn đăng xuất không ??',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'orange',
            confirmButtonText: 'ĐĂNG XUẤT',
            cancelButtonText: 'HỦY'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'ĐĂNG XUẤT THÀNH CÔNG',                   
                )
                handleSignOut()
            }
        })
    }

    // const [scrollInfo, setRef] = useScrollInfo();
    // console.log(scrollInfo);

    return (
        <header className="header" style={{ backgroundColor: isTopOfPage ? 'transparent' : 'black' }}>
            <div className="container">


                <div className="header_account row" style={{ display: isTopOfPage ? 'flex' : 'none' }}>
                    <div className="col text-left">
                        <NavLink className="navbar-brand header-img" to="/">
                            <img src={img} className="img-fluid" />
                        </NavLink>
                    </div>
                    <div className="col text-right">
                        <span className="account_icon"><i className=" fa fa-user-circle mr-2" /></span>
                        <div type=" button" className="account_detail btn dropdown-toggle pl-4 pr-4" data-toggle="dropdown">
                            {
                                credentials ? credentials.hoTen : '.......'
                            }
                        </div>
                        <div className="dropdown-menu">
                            <a className="acount_logout dropdown-item" href="#">Thông tin cá nhân</a>
                        </div>
                    </div>
                </div>


                <nav className=" header__nav navbar navbar-expand-md navbar-dark ">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#movieNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse " id="movieNavbar">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">TRANG CHỦ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#showlstMovie">LỊCH CHIẾU</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#booking">MUA VÉ</a>
                            </li>
                            {
                                credentials ? <li className="nav-item">
                                    <a className="nav-link" activeStyle={{ color: 'orange' }} onClick={() => { checkSignOut() }}>ĐĂNG XUẤT</a>
                                </li>
                                    : <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeStyle={{ color: 'orange' }} to="/signin" >ĐĂNG NHẬP</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeStyle={{ color: 'orange' }} to="/signup" >ĐĂNG KÍ</NavLink>
                                        </li>
                                    </>

                            }

                        </ul>
                    </div>
                </nav>
            </div>
        </header>


    )
}
