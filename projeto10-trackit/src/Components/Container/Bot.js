import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Bot(){
    const navigate=useNavigate();
    return(
        <DivBot>
        <h1 onClick={()=>{navigate("/habitos")}}>Hábitos</h1>
        <img src="./imgs/iconeBot.svg"/> <h2 onClick={()=>{navigate("/hoje")}}>Hoje</h2>
        <h1 onClick={()=>{navigate("/historico")}}>Histórico</h1>
        </DivBot>
    )
}
const DivBot=styled.div`
    margin-top: 70px;
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;

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