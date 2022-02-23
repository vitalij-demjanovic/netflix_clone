import {GET_FIND_NULL, GET_FIND_SUCCESS} from "../actions";

const initialState = {
    resultFind: [],
    changeFind: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FIND_SUCCESS: {
            return {
                resultFind: action.payload,
                changeFind: action.changeFind
            }
        }
        case GET_FIND_NULL: {
            return {
                resultFind: [],
            }
        }
        default:
            return state
    }
}