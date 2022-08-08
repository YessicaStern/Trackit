import styled from "styled-components";
import CreateHabitss from "./CreateHabitss";
import { useState } from "react";

export default function ZeroHabits(){
    const [ok,setOk]=useState(false);
    return(
    <DivInit>
        <DivMore><h1>Meus Hábitos</h1><button onClick={()=>{if(ok===false){setOk(true)}else{setOk(false)}}}>+</button></DivMore>
        {ok?( <CreateHabitss/>):(console.log())}
        <DivHabits><h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1></DivHabits>
    </DivInit>)
}

const DivInit=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const DivMore=styled.div`
    margin-top:20px;
    justify-content: center;
    display: flex;

    h1{margin-right: 155px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 22.9px;
    line-height: 29px;
    color: #126BA5;}
    button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.6px;
    border: 1px solid transparent;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 26.976px;
    text-align: center;
    color: #FFFFFF;
    padding-bottom:5px;
    }
`
const DivHabits=styled.div`
    margin-top: 30px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.9x;
    line-height: 22px;
    color: #666666;
    padding-left: 30px;
    padding-right: 30px;
`