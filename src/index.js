import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router} from "react-router-dom";
// import { Provider } from 'react';
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
