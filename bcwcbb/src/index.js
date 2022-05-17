import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pics from "./Pics"
import List from "./List"
import Navigation from "./Navigation"
import Horniest from './Horniest';
import Homophobes from './Homophobes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />
          <Route path = "/pics" element={<Pics/>}/>
          <Route path = "/list/:id" element = {<List />} />
          <Route path = "/horniest" element={<Horniest/>}/>
          <Route path = "/homophobes" element={<Homophobes/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
