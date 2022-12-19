import * as types from '../actionTypes';
export function menuSave(payload) {
    return {
        type: types.HOME_DATA,
        payload: payload,
    }
}


export function mainCategory(payload) {
    return {
        type: types.MAIN_CATEGORY,
        payload: payload,
    }
}

export function mainLocation(payload) {
    return {
        type: types.LOCATION,
        payload: payload,
    }
}

