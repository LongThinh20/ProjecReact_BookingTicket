import React, { Component } from 'react';
import img from '../../../img/movie-3.jpg';
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
                        <div className="detail"><a>CHI TIẾT</a></div>
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
