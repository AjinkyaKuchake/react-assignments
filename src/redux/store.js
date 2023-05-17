import { createStore } from "redux";
import rootReducer from "./reducers/myReducers";

const store = createStore(rootReducer);
export default store;
