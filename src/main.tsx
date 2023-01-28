import React from "react";
import ReactDOM from "react-dom";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

import { UIContextProvider } from "@context/UIContext/UIContextProvider";
import { AuthContextProvider } from "@context/AuthContext/AuthContextProvider";
import { WindowContextProvider } from "@context/WindowContext/WindowContextProvider";
import { ConfirmationContextProvider } from "@context/Confirmation/ConfirmationContextProvider";

import "./styles/index.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <UIContextProvider>
          <ConfirmationContextProvider>
            <WindowContextProvider>
              <App />
            </WindowContextProvider>
          </ConfirmationContextProvider>
        </UIContextProvider>
      </AuthContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
