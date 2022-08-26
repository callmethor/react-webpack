import { combineReducers } from "redux";
import counterReducers from "./counter"
import hobbyReducer from "./hobby";

const rootReducer = combineReducers({
  counter : counterReducers,
  hobby : hobbyReducer
})

export default rootReducer;