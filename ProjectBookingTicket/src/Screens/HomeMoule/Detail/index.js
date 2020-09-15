import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetailAction } from '../../../Redux/Actions/movie';


class DetailMovie extends Component {
    render() {
        return (
            <div className="container">
                <div className="card-columns">
                    <div className="card">
                        <img className="card-img-top" src={this.props.movieDetail.hinhAnh} />
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{this.props.movieDetail.tenPhim}</h4>
                            <p className="card-text">{this.props.movieDetail.moTa}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
       
        console.log(this.props.match.params.Id);

        this.props.dispatch(fetchMovieDetailAction(this.props.match.params.Id))
    //    movieService.fetchMovieDetail()
    //         .then(res => {
    //             this.props.dispatch(createAction(FETCH_MOVIE_DETAIL,res.data))
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    }
}

const mapStateToProps = (state) => ({
    movieDetail: state.movie.movieDetail || {
        hinhAnh: '',
        tenPhim: '',
        moTa: '',
    }
});


export default connect(mapStateToProps)(DetailMovie);