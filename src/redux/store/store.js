import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducer/productReducer";
import { cartReducer } from "./reducer/cartReducer";
import { orderFetchReducer } from "./reducer/orderReducer";
import { adminReducer } from "./reducer/adminReducer";

/**
 * Rootreducer object to combine all reducers
 */
const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  orderFetchReducer,
  adminReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, enhancers(applyMiddleware(thunk)));

/**
 * Store configureation
 */
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
