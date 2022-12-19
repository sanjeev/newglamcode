import { HOME_DATA } from '../actionTypes';
const initialState = {
    isConfirmatiom: false,
    media: [],
}
function addressSaveReducer(state = initialState, action) {

    switch (action.type) {
        case HOME_DATA:
            return {
                ...state,
                isConfirmatiom: true,
                media: action.payload,
            }
        default:
            return state
    }
}
export default addressSaveReducer;