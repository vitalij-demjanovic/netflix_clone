import {GET_RANDOM_SUCCESS} from "../actions";

const initialState = {
    randomList: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RANDOM_SUCCESS: {
            return {
                randomList: action.payload
            }
        }
        default:
            return state
    }
}