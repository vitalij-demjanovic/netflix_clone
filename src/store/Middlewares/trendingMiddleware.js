import {serverTrending} from "../../api/api";
import {GET_TRENDING_SUCCESS, GET_TRENDING} from "../actions";


export const trendingMiddleware = (store) => (next) => async (action) => {
    if (action.type === GET_TRENDING) {
        const { results } = await serverTrending()
        if (results) {
            console.log(results)
            const ListItem = results.slice(0, 10)
            store.dispatch({type: GET_TRENDING_SUCCESS, payload: ListItem})
        }
    } else {
        next(action)
    }
}