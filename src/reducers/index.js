import { combineReducers } from "redux";
import counterReducer from "./couunter/counter.reducer";

const reducers = combineReducers({
    // our app reducers
    counter: counterReducer
})

export default reducers;