import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authenticationReducer from "./utility/slices/authentication/authenticationSlice.ts";
import addProductReducer from "./utility/slices/addProduct/addProductSlice.ts";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["authentication"],
    blacklist: ["addProduct"],
};
const rootReducer = combineReducers({
    authentication: authenticationReducer,
    addProduct: addProductReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export type dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
