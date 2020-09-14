let initialState = {
    movies: []
}

const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES': {
            state.movies = action.payload;
            return { ...state }
        }

        default:
            return state;
    }
};

export default MovieReducer;

