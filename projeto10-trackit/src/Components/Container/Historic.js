import Top from "./Top"
import Bot from "./Bot"
import { getHistoric } from "../../Provider/AxiosTrackit"
import styled from "styled-components";

export default function Historic(){

    const token=localStorage.getItem("token");
    const config={headers:{Authorization:`Bearer ${token}`}} 
    // getHistoric([],config).then((resp)=>{console.log(resp)}).catch((resp)=>{console.log("aaaaa")})

    return(<div>
         <Top/>
         <H1TopHistoricer>Histórico</H1TopHistoricer>
         <H2TopHistoricer>Em breve você poderá ver o histórico dos seus hábitos aqui!</H2TopHistoricer>
         <Bot/>
    </div>
       
    )
}

const H1TopHistoricer=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-top: 80px;
    padding-left:30px;
    padding-right: 30px;
`
const H2TopHistoricer=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-top: 10px;
    padding-left:30px;
    padding-right: 30px;
`