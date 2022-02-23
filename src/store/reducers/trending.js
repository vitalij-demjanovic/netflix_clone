import {GET_TRENDING_SUCCESS} from "../actions";


const initialState = {
    trendingList: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TRENDING_SUCCESS: {
            return {
                trendingList: action.payload
            }
        }
        default:
            return state
    }
}