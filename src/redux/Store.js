import { createStore } from "redux";
import rootReducer from "./reducers/Index";

const store =createStore(rootReducer);

export default store;