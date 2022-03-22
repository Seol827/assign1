import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const NotFound = () => {
    let history = useHistory();

    return (
        <Back>
        <h1>주소가 올바르지 않아요!</h1>
        <button onClick={()=>{
            history.goBack();
        }}>뒤로 가기</button>
        </Back>
    );
};


const Back = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color : tomato;

  button {
    all: unset;
    margin-top: 18px;
    text-decoration: none;
    color: white !important;
    font-weight: bolder;
    padding: 10px 60px;
    background-color: silver;
    border-radius: 10px;
  }

  button:hover {
    cursor: pointer;
    color: black !important;
  }
`;



export default NotFound;