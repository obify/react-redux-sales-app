import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from './userActionTypes'

const initialUserState = {
    user: {},
    error: ''
}

const userReducer = (state = initialUserState, action)=>{

    switch (action.type) {
        case FETCH_USER_REQUEST:
            return initialUserState;

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                error: 'Some error occurred'
            }
    
        default:
            return state;
    }
}

export default userReducer;