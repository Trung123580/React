import React from "react";
import ReactDOM from "react-dom/client";
import App from "./view/App";
import reportWebVitals from "./reportWebVitals";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/redecures/rootReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const reduxStore = createStore(rootReducer);
root.render(
  <React.StrictMode>
    {/* <Provider store={reduxStore}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
