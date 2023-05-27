import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { PrivateRoutes } from ".";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import {Dashboard} from "../pages/Dashboard";
import {Game} from "../pages/Game";


 export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Game" element={<Game />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

