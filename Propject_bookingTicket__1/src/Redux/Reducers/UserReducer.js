
import { FETCH_CREDENTIALS } from "../Actions/type";

let initialState = {
    credentials: []
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CREDENTIALS: {
            state.credentials = action.payload;
            return { ...state }
        }
        case 'DELETE_ACCOUNT': {
            state.credentials = null;
            return { ...state }
        }
        default:
            return state
    }
}

export default UserReducer;