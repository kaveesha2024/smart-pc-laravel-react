import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router";
import WebRoutes from "./utility/webRouting/WebRoutes.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <WebRoutes />
      </BrowserRouter>
  </StrictMode>,
)
