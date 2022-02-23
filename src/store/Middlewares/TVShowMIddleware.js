import {GET_TVSHOW_SUCCESSS, GET_TVSHOW} from "../actions";
import {serverTVShow} from "../../api/api";

export const TVShowMIddleware = (store) => (next) => async (action) => {
    if (action.type === GET_TVSHOW) {
        const { results } = await serverTVShow()
        console.log(results)
        if (results) {
            const ListItem = results.slice(0, 10)
            store.dispatch({type: GET_TVSHOW_SUCCESSS, payload: ListItem})
        }
    } else {
        next(action)
    }
}