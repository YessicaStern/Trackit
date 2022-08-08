import React from "react";
import { deleteHabits } from "../../Provider/AxiosTrackit";
import { useState, useContext } from "react";


export default function deleteHabitsFunction(e){
    let token= localStorage.getItem("token");
    const config={headers:{Authorization:`Bearer ${token}`}}
    deleteHabits(e,config).then((resp)=>(console.log(resp))).catch((resp)=>(console.log(resp.response.status)));    
}   