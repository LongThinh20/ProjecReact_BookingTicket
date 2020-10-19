import { FETCH_CINEMA, FETCH_CINEMA_GROUP, FETCH_MOVIE, FETCH_MOVIE_DETAIL } from "../Actions/type";


let initialState = {
    movies: [],
    movieDetail: null,
    cinema: [],
    cinemaGroup: [],
    maHeThongRap: null,
    lstMovie: [],
    lstSeatBooking: [],
    lstBooking: [],
    lstInfoMovieBooking: [],
    objBooking: [],

}

const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE: {
            state.movies = action.payload;
            return { ...state }
        }
        case FETCH_MOVIE_DETAIL: {
            state.movieDetail = action.payload;
            return { ...state }
        }
        case FETCH_CINEMA: {

            state.cinema = action.payload;

            return { ...state }
        }
        case FETCH_CINEMA_GROUP: {

            state.cinemaGroup = action.payload;

            return { ...state }
        }
        case 'CHANGE_ID': {

            state.maHeThongRap = action.payload;
            return { ...state }
        }
        case 'LST_MOVIE': {

            state.lstMovie = action.payload;
            return { ...state }
        }
        case 'CHECK_SEAT_BOOKING': {

            let lstSeatBookingUpdate = [...state.lstSeatBooking];
            let index = lstSeatBookingUpdate.findIndex(gheDangDat => (gheDangDat.stt === action.payload.stt) && (gheDangDat.rowSeat === action.payload.rowSeat));
            if (index !== -1) {
                lstSeatBookingUpdate.splice(index, 1);
            } else {
                lstSeatBookingUpdate.push(action.payload);
            }
            state.lstSeatBooking = lstSeatBookingUpdate;

            return { ...state }
        }
        case 'ADD_MOVIEBOOKING_INFO_PROM_PAYLIST': {
            console.log(action.payload);
            let lstInfoMovieBookingUpdate = [...state.lstInfoMovieBooking];

            lstInfoMovieBookingUpdate.push(action.payload);

            state.lstInfoMovieBooking = lstInfoMovieBookingUpdate;

            localStorage.setItem("thongTinDatVe", JSON.stringify(state.lstInfoMovieBooking));

            return { ...state }
        }
        case 'LSTBOOKING_TO_SEATLST': {
            state.objBooking = action.payload;
            return { ...state }
        }

        default:
            return state;
    }
};

export default MovieReducer;

