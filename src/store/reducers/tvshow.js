import { GET_TVSHOW_SUCCESSS } from "../actions";

const initialState = {
    tvShowvList: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TVSHOW_SUCCESSS: {
            return {
                tvShowvList: action.payload
            }
        }
        default:
            return state
    }
}