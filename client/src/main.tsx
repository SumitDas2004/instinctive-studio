import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { SidebarProvider } from "./components/ui/sidebar";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store.js"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
    </Provider>
  </StrictMode>
);
