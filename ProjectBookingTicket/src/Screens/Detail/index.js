import Axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { fetchMovieDetail } from '../../Redux/Actions/movie';
import { FETCH_MOVIE_DETAIL } from '../../Redux/Actions/type';
import { movieService } from '../../Service';
;

class Detail extends Component {
    render() {
        return (
            <div className="container mt-4 mb-4">
                <div className="card text-white bg-dark">
                    <img className="card-img-top" src={this.props.movieDetail.hinhAnh} style={{ width: '200px' }} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.movieDetail.tenPhim}</h4>
                        <p className="card-text">{this.props.movieDetail.moTa}</p>
                        <p className="card-text">{this.props.movieDetail.ngayKhoiChieu}</p>
                        <p className="card-text">{this.props.movieDetail.danhGia}</p>
                        <a href={this.props.movieDetail.trailer}>trailer</a>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {

        // this.props.dispatch(fetchMovieDetail())
        // movieService
        //     .fetchMovieDetail(this.props.match.params.movieId)
        //     .then(res => {
        //         this.props.dispatch(createStore(FETCH_MOVIE_DETAIL, res.data));
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })

        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${this.props.match.params.movieId}`
        })
            .then(res => {
                this.props.dispatch({
                    type: FETCH_MOVIE_DETAIL,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const mapStateToProps = (state) => ({
    movieDetail: state.movie.movieDetail || {
        maPhim: '',
        tenPhim: '',
        hinhAnh: '',
        moTa: '',
        ngayKhoiChieu: '',
        danhGia: '',
        trailer: ''
    }
})


export default connect(mapStateToProps)(Detail);