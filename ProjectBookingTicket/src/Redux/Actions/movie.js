const { createAction } = require(".");
const { movieService } = require("../../Service");
const { FETCH_MOVIE, FETCH_MOVIE_DETAIL } = require("./type");

export const fetchMovieAction = () => {
    return (dispatch) => {
        movieService.fetchMovie()
            .then(res => {
                dispatch(createAction(FETCH_MOVIE, res.data));
            }).catch(err => {
                console.log(err);
            })
    }
}
export const fetchMovieDetailAction = (id) => {

    return (dispatch) => {
        movieService.fetchMovieDetail(id)
            .then(res => {
                dispatch(createAction(FETCH_MOVIE_DETAIL, res.data));
            }).catch(err => {
                console.log(err);
            })
    }
}