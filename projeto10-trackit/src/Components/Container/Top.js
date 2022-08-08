import styled from "styled-components";

export default function Top(){
    const image=localStorage.getItem("image");
    return(
        <DivTop><h1>Trackit</h1><img src={image}/></DivTop>
    );
}

const DivTop=styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    position: fixed;
    top: 0;

    h1{font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    box-sizing: border-box;
    }
    img{
    width: 51px;
    height: 51px;
    left: 306px;
    top: 9px;
    border-radius: 98.5px;
    box-sizing: border-box;
    }

`