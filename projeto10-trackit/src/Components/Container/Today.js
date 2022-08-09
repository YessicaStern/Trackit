import Bot from "./Bot"
import Top from "./Top"
import styled from "styled-components"
import { getHabitsToday} from "../../Provider/AxiosTrackit"
import { useEffect, useState } from "react";
import { postCheck } from "../../Provider/AxiosTrackit";
import { postUncheeck } from "../../Provider/AxiosTrackit";

import React, { useContext } from "react";
import { AuthContext } from "../../Provider/Auth";

function TodayHabit({setCheck,check,idHabit,done,currentSequence,highestSequence,name, percenter,perc}){
    const {percentage,setPercentage}=useContext(AuthContext);
    const {total,setTotal}=useContext(AuthContext);


    setPercentage((percenter/total*100));

    function toggleHabit(){
        const token=localStorage.getItem("token");
        const config={headers:{Authorization:`Bearer ${token}`}};

        if(!done){
            setCheck(!check);
            postCheck(idHabit,config).then((resp)=>{console.log(resp)}).catch((error)=>{{alert(error.message)}});       
            
        }else{
            setCheck(!check);
            postUncheeck(idHabit,config).then((resp)=>{console.log(resp)}).catch((error)=>{{alert(error.message)}});
            
        }
    }
 
    return (
        <Habit id={idHabit} done={done}>
        <div>
             <h1>{name}</h1>
             <h2>sequencia atual :<h3>{currentSequence}</h3></h2> 
             <h2>seu Recorde:<h3>{highestSequence}</h3></h2> 
        </div>
        <ion-icon name="checkbox"  onClick={toggleHabit}></ion-icon>
        </Habit> );
}



export default function Today(){
    const token=localStorage.getItem("token");
    const config={ headers:{Authorization:`Bearer ${token}`}};
    const [habits,setHabits]=useState([]);
    const [check,setCheck]=useState(false);
    const {total,setTotal}=useContext(AuthContext);
    const {percentage,setPercentage}=useContext(AuthContext);
    
    let habitToday;

    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = (dataAtual.getMonth() + 1);
    let weekDay = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    // console.log(`${weekDay[dataAtual.getDay()]} : ${dia}/${mes}`)

    useEffect(()=>{
        getHabitsToday(config)
        .then((resp)=>{console.log("atualizado");
            setHabits(resp.data)})
        .catch((resp)=>{console.log(resp.response.status)});
    },[check],[percentage]);
    
    let perc= habits.filter((element)=>{
        return (element.done);
    });    

    let percenter= perc.length;
    setTotal(habits.length);
    if(habits.length===0){
        habitToday= <h2>"Nenhum hábito concluído ainda"</h2>
    }else{
        habitToday= <h3>{percentage}% dos hábitos concluídos</h3>
    }
        return(
        <BodyToday> 
            <Top/>
                <DivInit>
                    <DivToday><h1>{weekDay[dataAtual.getDay()]}  :{dia}/{mes}</h1> {habitToday}</DivToday>                    
                    <DivHabits>
                        {habits.map((habit,i)=>(
                        <TodayHabit 
                            key={i}
                            setCheck={setCheck}
                            idHabit={habit.id}
                            done={habit.done}
                            currentSequence={habit.currentSequence}
                            highestSequence={habit.highestSequence}
                            name={habit.name}
                            check={check}
                            percenter={percenter}
                            perc={perc}
                        /> ))}   
                    </DivHabits>
                </DivInit>
            <Bot/>
        </BodyToday>
    )
}

const BodyToday=styled.div`
    margin-top: 70px;
    display:flex;
    flex-direction:column;
    width: 100%;
`
const DivToday = styled.div`
    margin-top:20px;
    justify-content: center;
    display: flex;
    flex-direction: column;

    h1{margin-right: 155px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 22.9px;
    line-height: 29px;
    color: #126BA5;}
    h2{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
    }
    h3{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #8FC549;
    }

`

const Habit = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 95px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: initial;
    padding: 15px;
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: column;
    }
    h1{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    }
    h2{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    display: flex;
    }
    h3{
        color: ${props => (
            props.done ? "#8FC549" : "#666666"
        ) };
    }
    ion-icon{
        font-size: 500%;
        margin-top: -10px;
        color: ${props => (
            props.done ? "#8FC549" : "#EBEBEB"
        ) };
    }
`


const DivInit = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:last-child {
    margin-bottom: 100px;
}
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
