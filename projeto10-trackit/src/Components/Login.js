import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { react, useState } from "react";
import axios from "axios";

export default function Login(){
    const navigate=useNavigate();
    const [form,setForm]=useState({
        email:"",
        password:"",
    })

    function handleForm(e){
        e.preventDefault();
        setForm({...form,[e.target.name]:e.target.value,});
    }
    function axiosfunc(){
        const promise= axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",form);
        promise.then(resultado);
        function resultado(resp){
            console.log(resp);
        }
        promise.catch(erro);
        function erro(resp){
            console.log(resp);
        }
    }
    return(<DivLogin>
        <ImgLogin src="./imgs/icone.svg"/>
        <FormLogin>
            <EmailLogin placeholder ="email" type="email" name="email" onChange={handleForm} required />
            <PasswordLogin placeholder="senha" type="password" name="password" onChange={handleForm} required/>
        </FormLogin>
        <ButtonLogin onClick={axiosfunc}>Entrar</ButtonLogin>
        <H1Login onClick={()=>{navigate("/cadastro")}}>Não tem uma conta? Cadastre-se!</H1Login>        
    </DivLogin>)
}
const FormLogin=styled.form`
    display:flex;
    flex-direction: column;
`
const DivLogin=styled.div`
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

