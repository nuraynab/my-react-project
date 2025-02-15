import * as ActionTypes from './ActionTypes';

export const Leaders = (state = {
    isLoading: true,
    errMess: null,
    leaders: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, leaders: action.payload, errMess: null}
        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, leaders: [], errMess: null}
        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, leaders: [], errMess: action.payload}
        default:
            return state;
    }
}