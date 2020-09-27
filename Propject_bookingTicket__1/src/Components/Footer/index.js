import React, { Component } from 'react';
import'../../Layouts/footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="background" />
                    <div className=" footer__content">
                        <div className="row">
                            <div className="footer__items col">
                                <h6>GIỚI THIỆU</h6>
                                <ul>
                                    <li><a href="#">VỀ CHÚNG TÔI</a></li>
                                    <li><a href="#">GÓP Ý</a></li>
                                    <li><a href="#">THÔNG TIN LIÊN HỆ</a></li>
                                </ul>
                            </div>
                            <div className="footer__items col ">
                                <h6>ABOUT MOVIE STAR</h6>
                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Find us</a></li>
                                    <li><a href="#">Schedule</a></li>
                                    <li><a href="#">News</a></li>
                                </ul>
                            </div>
                            <div className="footer__items col">
                                <h6>LEGAL STUFF</h6>
                                <ul>
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">Cookie policy</a></li>
                                </ul>
                            </div>
                            <div className="footer__items col">
                                <h6>KẾT NỐI VỚI CHÚNG TÔI</h6>
                                <ul>
                                    <li><a href="#">
                                        <i className="fab fa-facebook-f pr-2 .text-secondary " />
                Facebook</a></li>
                                    <li><a href="#">
                                        <i className="fab fa-twitter pr-2 .text-secondary" />
                Twiter</a></li>
                                    <li><a href="#">
                                        <i className="fab fa-google-plus-g pr-2 .text-secondary" />
                Google +</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
