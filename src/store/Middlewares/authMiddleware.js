import {AUTHENTICATE, ERROR_VALID, logIN} from "../actions";
import {serverLogIn, serverToken} from "../../api/api";


export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        const { request_token } = await serverToken()
        if (request_token) {
            console.log(request_token)
            const { username, password } = action.payload
            const data = await serverLogIn(username, password, request_token)
            if (data.ok === true) {
                console.log(data.ok)
                store.dispatch(logIN())
                localStorage.setItem('token', request_token)
            }else {
                store.dispatch({type:ERROR_VALID, error: true})
            }
        }
    }else {
        next(action)
    }
}