import { USERADDRESS } from '../actionTypes';
const initialState = {
    isConfirmatiom: false,
    useraddress: [],
}
function UserAddressReduces(state = initialState, action) {

    switch (action.type) {
        case USERADDRESS:
            return {
                ...state,
                isConfirmatiom: true,
                useraddress: action.payload,
            }
        default:
            return state
    }
}
export default UserAddressReduces;