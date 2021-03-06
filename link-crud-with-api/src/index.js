import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import DataProvider from "./providers/DataProvider";
import Links from "./pages/Links";
// import LinkShow from "./pages/LinkShow";
import NewLink from "./pages/NewLink";
import Home from "./pages/Home";


const NotFound = ()=>{
  return <p>path not found</p>
}

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* index will match parent path in this case '/' */}
          <Route index element={<Links />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/links/:id' element={<LinkShow />} /> */}
          <Route path='/links/new' element={<NewLink />} />
          <Route path='/links/:id/edit' element={<NewLink />} />
          <Route path='/links/home' element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </DataProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();