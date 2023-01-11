import { USERDATA } from '../actionTypes';
const initialState = {
    isConfirmatiom: false,
    userdetails: [],
}
function userReducer(state = initialState, action) {

    switch (action.type) {
        case USERDATA:
            return {
                ...state,
                isConfirmatiom: true,
                userdetails: action.payload,
            }
        default:
            return state
    }
}
export default userReducer;