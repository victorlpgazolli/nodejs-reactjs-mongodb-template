import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore,  } from 'redux-persist';
import persistReducers from './persistReducer';
import rootReducer from "./modules/rootReducer";

const initialState = {};
const middlewares = [thunk];
const persistedReducer = persistReducers(rootReducer);


const store = createStore(
    persistedReducer,
    initialState,
    compose(
        applyMiddleware(...middlewares),

    )
);

const persistor = persistStore(store);

export { store, persistor };