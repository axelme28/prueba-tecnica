import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "../reducers/authReducer";
import { usersReducer } from "../reducers/users";
import { postsReducer } from "../reducers/postsReducer";
import { albumsReducer } from "../reducers/albumsReducer";

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["auth", "users", "posts", "albums"],
};

const pReducer = persistReducer(
    persistConfig,
    combineReducers({
        auth: authReducer,
        users: usersReducer,
        posts: postsReducer,
        albums: albumsReducer,
    })
);

const composeEnhancers =
    (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const reducers = combineReducers({
// 	auth: authReducer,
// 	newItem: newItemReducer,
// 	ui: uiReducer,
// });

export const store = createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
