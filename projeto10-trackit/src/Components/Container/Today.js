import Bot from "./Bot"
import Top from "./Top"
import styled from "styled-components"
import { getHabitsToday } from "../../Provider/AxiosTrackit"

export default function Today(){
    const token=localStorage.getItem("token");
    const config={headers:{Authorization:`Bearer ${token}`}}

    getHabitsToday(config).then((resp)=>{console.log(resp)}).catch((resp)=>{console.log(resp.response.status)});
    return(
        <BodyToday> 
            <Top/>                                   
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
const DivToday=styled.div`
    height: 527px;
    background: #E5E5E5;
`