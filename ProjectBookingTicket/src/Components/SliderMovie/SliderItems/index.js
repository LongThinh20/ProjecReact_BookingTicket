import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SliderItems extends Component {
    render() {
        
        return (
            <div className="item carousel__detail">
                <div className="newIn__img img-fluid">
                    <img src={this.props.item.hinhAnh} alt />
                    <div className="overlay" />
                    <div className="newIn__play">
                        <a>
                            <i className="fa fa-play d-block" />
                        </a>
                    </div>
                    <div className="newIn__payTicket">
                        <div className="detail"><Link to={`/detail/${this.props.item.maPhim}`}>CHI TIẾT</Link></div>
                        <div className="pay"><a> MUA VÉ</a> </div>
                    </div>
                </div>
                <div className="newIn__text">
                    <p>{this.props.item.tenPhim}</p>
                </div>
            </div>
        )
    }
}
