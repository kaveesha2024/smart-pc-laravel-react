import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router";
import AppRoutes from "./utility/webRouting/AppRoutes.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                  <AppRoutes />
              </PersistGate>
          </Provider>
      </BrowserRouter>
  </StrictMode>,
)
