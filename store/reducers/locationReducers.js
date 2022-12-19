import { LOCATION } from '../actionTypes';
const initialState = {
    isConfirmatiom: false,
    location: [],
}
function addressSaveReducer(state = initialState, action) {

    switch (action.type) {
        case LOCATION:
            return {
                ...state,
                isConfirmatiom: true,
                location: action.payload,
            }
        default:
            return state
    }
}
export default addressSaveReducer;