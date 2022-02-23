import {applyMiddleware, createStore, compose} from "redux";
import rooReducer from './reducers'
import {authMiddleware} from "./Middlewares/authMiddleware";
import {findMiddleware} from "./Middlewares/findMiddleware";
import {randomMiddleware} from "./Middlewares/randomMiddleware";
import {TVShowMIddleware} from "./Middlewares/TVShowMIddleware";
import {trendingMiddleware} from "./Middlewares/trendingMiddleware";

export const store = createStore(
    rooReducer,
    compose(
        applyMiddleware(authMiddleware),
        applyMiddleware(findMiddleware),
        applyMiddleware(randomMiddleware),
        applyMiddleware(TVShowMIddleware),
        applyMiddleware(trendingMiddleware)
    )
)