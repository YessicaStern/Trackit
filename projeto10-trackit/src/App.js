import { AuthProvider } from './Provider/Auth';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import GlobalStyle from "./Provider/style";

import Habits from "./Components/Habits/Habits";
import Login from "./Components/Init/Login";
import Registration from './Components/Init/Registration';
import Today from './Components/Container/Today';
import Historic from './Components/Container/Historic';


export default function App(){
    return(
  <>
  <AuthProvider>
  <GlobalStyle/>  
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Registration/>}/>
        <Route path="/habitos" element={<Habits/>}/>
        <Route path="/hoje" element={<Today/>}/>
        <Route path="/historico" element={<Historic/>}/>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
  </>)
 }
