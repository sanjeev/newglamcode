import { MAIN_CATEGORY } from '../actionTypes';
const initialState = {
    isConfirmatiom: false,

    maincategory: []
}
function mainCatReducers(state = initialState, action) {

    switch (action.type) {
        case MAIN_CATEGORY:
            return {
                ...state,
                isConfirmatiom: true,
                maincategory: action?.payload,
            }
        default:
            return state
    }
}
export default mainCatReducers;