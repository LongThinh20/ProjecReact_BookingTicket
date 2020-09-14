import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer'
const RootReducer = combineReducers({
    movie: MovieReducer
});

export default RootReducer;