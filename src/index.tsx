<<<<<<< HEAD
import React from "react";
import {createRoot} from "react-dom/client";
=======

import React from "react";
import { createRoot } from "react-dom/client";
>>>>>>> develop
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import theme from "./app/MaterialTheme";
import "./css/index.css";
import {  BrowserRouter as Router} from "react-router-dom";

const container = document.getElementById("root")!;
=======
import "./css/index.css";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./app/MaterialTheme";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./app/context/ContextProvider";
import { SocketProvider } from "./app/context/SocketContext";

const container = document.getElementById('root')!;
>>>>>>> develop
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
        <App />
        </Router>
      </ThemeProvider>
      </Provider>
  </React.StrictMode>
);

=======
      <ContextProvider>
        <SocketProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <App />
            </Router>
          </ThemeProvider>
        </SocketProvider>
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
);


>>>>>>> develop
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
<<<<<<< HEAD
=======
console.log("React");
console.log("Component based Declarative Single Page Application");
>>>>>>> develop
