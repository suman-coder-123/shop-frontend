import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import App from "./App";

import { Toaster } from "react-hot-toast";

import "./index.css";

import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <Provider store={store}>

     

      <BrowserRouter>
       <Toaster position="top-right" />
        <App />
      </BrowserRouter>

    </Provider>

  </React.StrictMode>
);