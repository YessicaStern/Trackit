import styled from "styled-components"
import Top from "../Container/Top"
import Bot from "../Container/Bot"
import { getHabits } from "../../Provider/AxiosTrackit"

import React, { useContext } from "react";
import { AuthContext } from "../../Provider/Auth";

import { useEffect } from "react";
import { useState } from "react";
import ZeroHabits from "./ ZeroHabits";
import AllHabits from "./AllHabits";


export default function Habits(){
    const [ok,setOk]=useState(false);
    const {habits,setHabits}=useContext(AuthContext);
    // const {token,setToken} =useContext(AuthContext);
    const image=localStorage.getItem("image");
    const token =localStorage.getItem("token");

    const [renders,setRenders]= useState(true);
    console.log ("renders="+renders);
    

    useEffect(()=>{
        const config={
            headers:{Authorization:`Bearer ${token}`}
        };
        getHabits(config).then((e)=>{
            setHabits(...[e.data]);
            if(e.data.length==0){setOk(true)}else{setOk(false)};
        }).catch((e)=>{
                console.log(e.response.status);
        })
    },[renders])
    return(
        <BodyHabits> 
            <Top/>
            <DivHabits>
            {ok ? (<ZeroHabits/>):(<AllHabits renders={renders} setRenders={setRenders}/>)}  
            </DivHabits>                                     
            <Bot/>
        </BodyHabits>
    )
}

const BodyHabits=styled.div`
    margin-top: 70px;
    display:flex;
    flex-direction:column;
    width: 100%;
`
const DivHabits=styled.div`
    height: 527px;
    background: #E5E5E5;
`