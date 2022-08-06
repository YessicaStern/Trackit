import styled from "styled-components";
import {React, useState} from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { postRegistration } from "./AxiosTrackit";

export default function Registration(){   
    const navigate=useNavigate();
    const [form,setForm]=useState({
        email:"",
        name:"",
        image:"",
        password:""
    })
    function handleForm(e){
        e.preventDefault();
        setForm({...form,[e.target.name]:e.target.value,});
    } 
    function signUp(){
        postRegistration(form).then((resp)=>{navigate("/")});
    }
    return(<DivRegistration>
        <ImgRegistration src="./imgs/icone.svg"/>
        <FormRegistration>
            <EmailRegistration placeholder ="email" type="email" name="email" onChange={handleForm} required />
            <PasswordRegistration placeholder="senha" type="password" name="password" onChange={handleForm} required/>
            <NameRegistration placeholder ="nome" type="text" name="name" onChange={handleForm} required />
            <PhotoRegistration placeholder ="foto" type="url" name="image" onChange={handleForm} required />
        </FormRegistration>
            <ButtonRegistration onClick={signUp}>Cadastrar</ButtonRegistration>
        <H1Registration>Já tem uma conta? Faça login!</H1Registration>        
    </DivRegistration>)
}
const FormRegistration=styled.form`
    display:flex;
    flex-direction: column;
`
const DivRegistration=styled.div`
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const ImgRegistration=styled.img`
    margin-bottom: 30px;
`
const EmailRegistration=styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 5px;
    outline: none;
    padding: 10px;

    ::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        margin: 50px;
    }
`
const PasswordRegistration=EmailRegistration;
const NameRegistration=EmailRegistration;
const PhotoRegistration=EmailRegistration;

const ButtonRegistration=styled.button`
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
const H1Registration=styled.h1`
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`



