import { GET_FIND, GET_FIND_SUCCESS} from "../actions";
import {serverFind} from "../../api/api";


export const findMiddleware = (store) => (next) => async (action) => {
    if (action.type === GET_FIND) {
        const word = action.payload
        const { results } = await serverFind(word)
        console.log(results)
        if (results) {
            const ListItem = results.slice(0, 10)
            store.dispatch({type: GET_FIND_SUCCESS, payload: ListItem, changeFind: word})
        }
    }  else {
        next(action)
    }
}