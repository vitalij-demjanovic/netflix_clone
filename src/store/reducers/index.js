import { combineReducers } from "redux";
import auth from "./auth";
import find from "./find";
import random from "./random";
import tvshow from "./tvshow";
import trending from "./trending";

export default combineReducers({
    auth,
    find,
    random,
    tvshow,
    trending
})