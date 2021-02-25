import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

// Import CSS
import './index.css';
// import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

// Import Local Componentsont
import App from "./App";

// window.$API_address = "";
window.$API_address = "http://127.0.0.1:8080/";


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById("root"));


