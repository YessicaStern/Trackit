import styled from "styled-components";
import { useState } from "react";
import { postHabits } from "../../Provider/AxiosTrackit";
import { AuthContext } from "../../Provider/Auth";
import React, { useContext } from "react";


function DaysWeek({day,number,arr,setArr}){
    const [color,setColor]=useState("#ffffff");
    const [click,setClick2]=useState(false);

    function DayClick(){
        if(!click){
            setClick2(!click);
            setColor("#00008D");
            if( !arr.includes(number)){setArr(arr,arr.push(number)); console.log("Array atualizado======= "+[arr])}
        }else{
            setClick2(!click);
            setColor("#ffffff");
            let i=arr.indexOf(number)
            if(arr.includes(number)){while(i>=0){setArr(arr,arr.splice(i,1), i=arr.indexOf(number));console.log("Removeu ======"+arr)};}
        }
    }
    return(
        <DayBox colorDiv={color} onClick={DayClick}><Day>{day}</Day></DayBox>
    )
}

function ButtonCancelDiv({arr,namee}){
    function CancelNewHabits(){
        console.log("cancelou"+arr+namee);
    }    
    return(
    <ButtonCancel onClick={CancelNewHabits}>Cancelar</ButtonCancel>)
}

function ButtonSaveDiv({arr,namee}){
    const token=localStorage.getItem("token");
    function SaveNewHabits(){
            const newHabit={
                name: namee,
                days: arr};
            const config={headers:{Authorization:`Bearer ${token}`}};
            postHabits(newHabit,config).then((resp)=>{console.log(resp)}).catch((resp)=>{console.log(resp.response.status)});          
    }
    return(<ButtonSave onClick={SaveNewHabits}>Salvar</ButtonSave>)
}

export default function CreateHabitss(){
    const [arr,setArr]=useState([]);
    const [namee,setNamee]=useState("");
    const [des,setDes]=useState(false);
    const daysWeek=[{day:"D", number: 1},{day:"S", number: 2},{day:"T", number: 3},{day:"Q", number: 4},{day:"Q", number: 5},{day:"S", number: 6},{day:"S", number: 7}];
    
    return(
        <CreateHabits>
            <InputHabits disabled={des} placeholder="nome do hábito" type="text" name="name" value={namee} onChange={(e)=>{e.preventDefault();setNamee(e.target.value)}} required></InputHabits>
            <Days>
                {daysWeek.map((e,index)=>(<DaysWeek day={e.day} number={e.number} key={index} arr={arr} setArr={setArr} />))}
            </Days>
            <DivButton>
            <ButtonCancelDiv arr={arr} namee={namee}/>
            <ButtonSaveDiv arr={arr} namee={namee}/>
            </DivButton>
        </CreateHabits>
    )
    
}

const CreateHabits=styled.div`
    margin-top: 30px;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`
const InputHabits=styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    outline: none;

    ::placeholder{
    padding-left: 10px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    }
`
const Days=styled.div`
    display:flex;
    margin-top: 10px;
    margin-left:-65px;
`
const DayBox=styled.div`
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
const Day=styled.div`
    width: 15px;
    height: 25px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.9px;
    line-height: 25px;
    color: #DBDBDB;
`
const ButtonCancel=styled.button`
    width: 84px;
    height: 35px;
    color: #52B6FF;
    background-color: #ffffff;
    border-radius: 4.63636px;
    border: 1px solid transparent;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 15.976px;
    text-align: center;
    margin-right: 20px;
`
const ButtonSave=styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: 1px solid transparent;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
`
const DivButton=styled.div`
    margin-top:20px;
    margin-left:115px;
`