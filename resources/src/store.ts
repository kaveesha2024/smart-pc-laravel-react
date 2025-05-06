import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authenticationReducer from "./utility/slices/authentication/authenticationSlice.ts";
import addProductReducer from "./utility/slices/addProduct/addProductSlice.ts";
import dashboardReducer from "./utility/slices/dashboard/dashboardSlice.ts";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["authentication"],
    blacklist: ["addProduct", "dashboard"],
};
const rootReducer = combineReducers({
    authentication: authenticationReducer,
    addProduct: addProductReducer,
    dashboard: dashboardReducer
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
export type RootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);
