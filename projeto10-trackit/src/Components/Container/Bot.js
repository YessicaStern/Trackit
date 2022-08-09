import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  

import {render} from "react-dom"
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/Auth";

export default function Bot(){
    const navigate=useNavigate();
    const {percentage,setPercentage}=useContext(AuthContext);

    return(
        <Footer>
        <h1 onClick={()=>{navigate("/habitos")}}>Hábitos</h1>
        {/* <img src="./imgs/iconeBot.svg"/> <h2 onClick={()=>{navigate("/hoje")}}>Hoje</h2> */}
        
        <div onClick={()=>{navigate("/hoje")}} > <CircularProgressbar
        value={percentage}
        text={"Hoje"}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#52B6FF",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}/>
        </div>
    
         <h1 onClick={()=>{navigate("/historico")}}>Histórico</h1>
        </Footer>
    )
}

const Footer=styled.footer`
    margin-top: 70px;
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;

    div{
        width: 91px;
        height: 91px;
        margin-bottom: 40px;
    }

    h1{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
    }
    h2{
    position: absolute;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    }
    img{
    margin-top: -50px;
    }
    h2{
    margin-top: -50px;
    margin-left: -20px;
    }
`