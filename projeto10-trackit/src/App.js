import { createGlobalStyle } from 'styled-components';
import "./reset.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Components/Login";

import Registration from './Components/Registration';

export default function App(){
    return(
  <>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Registration/>}/>
    </Routes>
  </BrowserRouter>
  </>)
 }
