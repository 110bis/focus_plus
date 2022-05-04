// Import dependencies //
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Import pages //
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="*" element={<Error />} options={{ status: 404}} />
    </Routes>
  </BrowserRouter>
);
