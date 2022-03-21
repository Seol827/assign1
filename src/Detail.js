import React from "react";
import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";

const Detail = (props) => {
    const param = useParams();
    const history = useHistory();
    
    const [circle, setCircle] = React.useState(0);
    
  return (
    <Back>
      <Content>
        <h2 style={{color : "#A0937D", fontWeight : "bolder"}}><span>{param.day}요일</span> 평점 남기기</h2>
        <Item>
        {Array.from({ length: 5 }, (round, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => {
                        setCircle(idx + 1)
                    }}
                    style={{
                      backgroundColor: circle < idx + 1 ? "#FFF5EB" : "#E3CDC1",
                      width: "25px",
                      height: "25px",
                      margin : "10px 10px",
                      borderRadius : "50%",
                    }}
                    ></div>
                );
              })}
        </Item>
        <button onClick={()=>{
            history.goBack();
        }}>완료</button>
      </Content>
    </Back>
  );
};

const Back = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  background-color: #F6E6CB;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 40px;
  height: 400px;

  span {
      padding : 7px;
      background-color : tomato;
      border-radius : 5px;
      color : white;
  }

  button {
    all: unset;
    margin-top: 18px;
    text-decoration: none;
    color: white!important;
    font-weight: bolder;
    padding : 10px 60px;
    background-color : silver;
    border-radius : 10px;

  }

  button:hover {
    cursor: pointer;
    color: black!important;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  justify-content : center;
  alignItems : center;

  div:hover {
      cursor : pointer;
  }
`;

export default Detail;
