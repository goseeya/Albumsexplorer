import { combineReducers } from "redux";
import albumsReducer from "./reducers/mainScreen";

const rootReducer = combineReducers({
  albumsReducer
});

export default rootReducer;
