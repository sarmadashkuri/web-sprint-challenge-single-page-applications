import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import PizzaForm from './Components/PizzaForm';


const App = () => {


  return (
    <>
      <h1>Lambda Eats</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>&nbsp;
        <Link to="/pizza" id="order-pizza">Order</Link>
      </div>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="pizza" element={<PizzaForm/>}/>
      </Routes>
    </>
  );
};
export default App;
