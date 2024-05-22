import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Bascet from "../Pages/Bascet/Bascet";
import Wishlist from "../Pages/Wishlist/Wishlist";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/Bascet" element ={<Bascet/>}/>
          <Route path="/Wishlist" element ={<Wishlist/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;


