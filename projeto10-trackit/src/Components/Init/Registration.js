import styled from "styled-components";
import {React, useState} from "react";
import { useNavigate } from "react-router-dom"
import { postRegistration } from "../../Provider/AxiosTrackit";
import { ThreeDots } from  'react-loader-spinner';

export default function Registration(){   
    const navigate=useNavigate();
    const [wait,setWait]=useState(false);
    const [butonEnter,setButonEnter]=useState("Cadastrar");
    const [form,setForm]=useState({
        email:"",
        name:"",
        image:"",
        password:""
    })
    function handleForm(e){
        // console.log(e);
        // debugger;
        e.preventDefault();
        setForm({...form,[e.target.name]:e.target.value,});
    } 
    function signUp(){
        setButonEnter(<Ball><ThreeDots color="white" height={80} width={80}/></Ball>);
        setWait(true)
        postRegistration(form).then((resp)=>{navigate("/");console.log(resp)})
        .catch((resp)=>{alert("Por favor preencha os campos corretamente");setWait(false);setButonEnter("Cadastrar")});
    }
    return(<DivRegistration>
        <ImgRegistration src="./imgs/icone.svg"/>
        <FormRegistration onSubmit={handleForm}>
            <EmailRegistration disabled={wait} placeholder ="email" type="email" name="email" onChange={handleForm} required />
            <PasswordRegistration disabled={wait}  placeholder="senha" type="password" name="password" onChange={handleForm} required/>
            <NameRegistration disabled={wait}  placeholder ="nome" type="text" name="name" onChange={handleForm} required />
            <PhotoRegistration disabled={wait}  placeholder ="foto" type="url" name="image" onChange={handleForm} required />
            <ButtonRegistration disabled={wait}  onClick={signUp}>{butonEnter}</ButtonRegistration>
        </FormRegistration>          
        <H1Registration onClick={()=>{navigate("/")}}>Já tem uma conta? Faça login!</H1Registration>
    </DivRegistration>)
}
const FormRegistration=styled.form`
    display:flex;
    flex-direction: column;
`
const DivRegistration=styled.div`
    width: 100%;
    height: 667px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
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

const Ball=styled.div`
    margin-top: -20px;
    margin-left: 100px;
`


