import { movieService } from '../../Service';
import { createAction } from '.';
import { FETCH_MOVIES, FETCH_MOVIE_DETAIL } from './type';

import { createStore } from 'redux';

export const fetchMovie = () => {
    return dispatch => {
        movieService
            .fetchMovie()
            //promise
            .then(res => {
                dispatch(createAction(FETCH_MOVIES, res.data));
            }).catch(err => {
                console.log(err);
            })
    }

}
export const fetchMovieDetail = () => {
    return dispatch => {
        movieService
            .fetchMovieDetail()
            .then(res => {
                dispatch(createStore(FETCH_MOVIE_DETAIL, res.data))
            }).catch(err => {
                console.log(err);
            })
    }
}

