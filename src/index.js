import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import dayjs from "dayjs";
import Main from "./views/Main";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root"),
);
