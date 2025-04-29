import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authenticationSlice from "./utility/slices/authentication/authenticationSlice.ts";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['authentication']
}
const rootReducer = combineReducers({
    authentication: authenticationSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
});
export const persistor = persistStore(store)
