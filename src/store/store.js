import {compose, createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import {rootReducer} from "./root-reducer";

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
    Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, undefined, composedEnhancers);
