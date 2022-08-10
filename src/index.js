import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import AuthProvider from "./frontend/context/authContext";
import ActionProvider from "./frontend/context/actionContext";
import DataProvider from "./frontend/context/dataContext";

makeServer();


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <DataProvider>
      <ActionProvider>
        <App />
    </ActionProvider>
    </DataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
