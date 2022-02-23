import {GET_RANDOM, GET_RANDOM_SUCCESS} from "../actions";
import {serverRandomMovie} from "../../api/api";

export const randomMiddleware = (store) => (next) => async (action) => {
    if (action.type === GET_RANDOM) {
        const { results } = await serverRandomMovie()
        if (results) {
            console.log(results)
            const ListItem = results.slice(0, 10)
            store.dispatch({type: GET_RANDOM_SUCCESS, payload: ListItem})
        }
    } else {
        next(action)
    }
}