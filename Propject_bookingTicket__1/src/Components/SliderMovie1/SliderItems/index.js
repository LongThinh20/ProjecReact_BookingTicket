import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SliderItems(props) {
    return (
        <div className="item carousel__detail">
            <div className="newIn__img img-fluid">
                <img src={props.item.hinhAnh} alt />
                <div className="overlay" />
                <div className="newIn__play">
                    <a>
                        <i className="fa fa-play d-block" />
                    </a>
                </div>

                <div className="newIn__payTicket">
                    <div className="detailMovie"><NavLink to={`/detail/${props.item.maPhim}`}>ĐẶT VÉ</NavLink></div>
               
                </div>
            </div>
            <div className="newIn__text">
                <p>{props.item.tenPhim}</p>
            </div>
        </div>
    )
}
