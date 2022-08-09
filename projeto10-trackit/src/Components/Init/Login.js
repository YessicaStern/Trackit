import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { postLogin } from "../../Provider/AxiosTrackit";
import { ThreeDots } from  'react-loader-spinner';

import React from "react";
import { AuthContext } from "../../Provider/Auth";

export default function Login(){
    const {token,setToken}=React.useContext(AuthContext);
    const {habits,setHabits}=React.useContext(AuthContext);
    const [wait,setWait]=useState(false);
    const navigate=useNavigate();
    const [butonEnter,setButonEnter]=useState("Entrar");
    const [form,setForm]=useState({
        email:"",
        password:"",    
    })
    function handleForm(e){
        e.preventDefault();
        setForm({...form,[e.target.name]:e.target.value,});
        setHabits([]);
    }
    function axiosfunc(){
        setWait(true);
        setButonEnter(<Ball><ThreeDots color="white" height={80} width={80}/></Ball>)
        postLogin(form).then((resp)=>{setToken(resp.data.token);
            localStorage.setItem("token",resp.data.token);
            localStorage.setItem("image",resp.data.image);
            navigate("/hoje")})
        .catch((resp)=>(setWait(false), setButonEnter("Entrar"), alert("Email ou senha inválidos")));
    }
    return(<DivLogin>
        <ImgLogin src="./imgs/icone.svg"/>
        <FormLogin>
            <EmailLogin  disabled={wait} placeholder ="email" type="email" name="email" onChange={handleForm} required />
            <PasswordLogin disabled={wait} placeholder="senha" type="password" name="password" onChange={handleForm} required/>
        </FormLogin>
        <ButtonLogin disabled={wait} onClick={axiosfunc}>{butonEnter}</ButtonLogin>
        <H1Login onClick={()=>{navigate("/cadastro")}}>Não tem uma conta? Cadastre-se!</H1Login>
    </DivLogin>)
}
const FormLogin=styled.form`
    display:flex;
    flex-direction: column;
`
const DivLogin=styled.div`
    width: 100%;
    height: 667px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
`
const ImgLogin=styled.img`
    margin-bottom: 30px;
    margin-top: -150px;
`
const EmailLogin=styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 5px;
    outline: none;
    padding: 10px;
    color: ${props => (
            props.disabled ? "#DBDBDB" : "#00000"
        ) };

    ::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        margin: 50px;
    }
`
const PasswordLogin=EmailLogin;
const ButtonLogin=styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.6px;
    border: solid transparent;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 35px;
`
const H1Login=styled.h1`
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`
const Ball=styled.div`
    margin-top: -20px;
    margin-left: 100px;
`
