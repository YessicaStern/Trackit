import styled from "styled-components";
import CreateHabitss from "./CreateHabitss";
import { useEffect, useState } from "react";
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/Auth";
import deleteHabitsFunction from "./DeleteHabitss";

export default function AllHabits({renders,setRenders}) {
    const arr = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [ok, setOk] = useState(false);
    const { habits, setHabits } = useContext(AuthContext);
    let id;
    

    return (
        <DivInit>
            <DivMore><h1>Meus Hábitos</h1><button onClick={() => { 
                if (ok === false) { setOk(true) } else { setOk(false) } }}>+</button></DivMore>
            {ok ? (<CreateHabitss />) : (console.log())}
            <DivHabits>
            {habits.map((e,index) => (
                    <CreateHabits key={index} >
                        <h1>{e.name} <img src="./imgs/iconDel.svg" onClick={()=>{
                            id=e.id; setRenders(!renders) ; deleteHabitsFunction(id)}}/> </h1>
                        <Days>{arr.map((el, i) => ((<DayBox colorDiv={e.days.includes(i) ? "#CFCFCF" : "#ffffff"}><Day>{arr[i]}</Day></DayBox>)))}</Days>
                    </CreateHabits>))}
            </DivHabits>
        </DivInit>)
}

const DivInit = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const DivMore = styled.div`
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
const DivHabits = styled.div`
    margin-top: 30px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.9x;
    line-height: 22px;
    color: #666666;
    padding-left: 30px;
    padding-right: 30px;
`


const DayBox = styled.div`
     width: 30px;
     height: 30px;
     background: ${e => e.colorDiv};
     border: 1px solid #D5D5D5;
     border-radius: 5px;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-right: 4px;
 `
const CreateHabits = styled.div`
    margin-top: 30px;
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: initial;
    padding: 15px;
    h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 5px;
    margin-top: -3px;
    display: flex;
    justify-content: space-between;
}
`
const Days = styled.div`
    display:flex;
`
const Day = styled.div`
    width: 15px;
    height: 25px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.9px;
    line-height: 25px;
    color: #DBDBDB;
`
