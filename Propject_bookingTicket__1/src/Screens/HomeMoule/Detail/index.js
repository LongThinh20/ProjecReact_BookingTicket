import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetailAction } from '../../../Redux/Actions/movie';
import button_Trailer from '../../../Sass/Components/button_Trailer.scss';
import '../../../Layouts/detail.scss';
import backgroundMovie from '../../../Sass/Components/backgroundMovie.scss';
import button_Cinema from '../../../Sass/Components/button_Cinema.scss'
import moment from 'moment';



class DetailMovie extends Component {
    render() {
        const imgStyle = {
            // background: `url({${this.props.movieDetail.hinhAnh}})`,
            backgroundImage: `url(${this.props.movieDetail.hinhAnh})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top center'
        }
        return (
            <section className="detail" style={imgStyle}>
                <div className="container">
                    <div className="backgroundMovie"></div>
                    <div className="row">
                        <div className="col-3 left_content">
                            <div className="button_Trailer">
                                <a href={this.props.movieDetail.trailer} data-toggle="modal" data-target="#exampleModalCenter">
                                    <i className="fa fa-play d-block" />
                                </a>
                            </div>

                            <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="htrue">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <iframe width="560" height="315" src={this.props.movieDetail.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="detail_Img">
                                <img src={this.props.movieDetail.hinhAnh} ></img>
                            </div>

                        </div>
                        <div className="col right_content">
                            <h1> {this.props.movieDetail.tenPhim}</h1>
                            <p>{moment(`${this.props.movieDetail.ngayKhoiChieu}`).format('DD.MM.yyyy')}</p>
                            <p className="rating_Star">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <span> {this.props.movieDetail.danhGia}</span>
                            </p>
                            <p className="description">  {this.props.movieDetail.moTa}</p>
                            <button className="btn button_Cinema">ĐẶT VÉ</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    componentDidMount() {

        console.log(this.props.match.params.Id);

        this.props.dispatch(fetchMovieDetailAction(this.props.match.params.Id))

    }
}

const mapStateToProps = (state) => ({
    movieDetail: state.movie.movieDetail || {
        hinhAnh: '',
        tenPhim: '',
        moTa: '',
        ngayKhoiChieu: '',
        danhGia: '',
        trailer: ''

    }
});


export default connect(mapStateToProps)(DetailMovie);