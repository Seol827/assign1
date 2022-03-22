import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const history = useHistory();
  let days = ["일", "월", "화", "수", "목", "금", "토"];

  const rate = Array.from({ length: 7 }, (rate) => {
    return (
        Math.floor(Math.random() * 5)
    );
  })

  //(+)오늘 기준 요일 정렬
  const numDay = new Date().getDay();
  let cutDay = days.splice(0, numDay);
  days = days.concat(cutDay);


  return (
    <Back>
      <Content>
        <h2>나의 일주일은?</h2>
        {rate.map((day, idx) => {
          return (
            <Item key={`days${idx}`}>
              <Day idx={idx}>{days[idx]}</Day>
              {Array.from({ length: 5 }, (_, idx) => {
                return (
                  <Circle
                    key={idx}
                    idx={idx} day={day}
                  ></Circle>
                );
              })}
              <FontAwesomeIcon
                icon={faCircleRight}
                className="nextBtn"
                onClick={() => {
                  history.push(`/detail/${days[idx]}`);
                }}
              />
            </Item>
          );
        })}
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
  background-color: #f6e6cb;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 40px;
  height: 400px;
  width : 300px;
  min-width : 300px;

  h2 {
    color: #A0937D;
    font-weight: bolder;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  justify-content: center;
  alignitems: center;

  .nextBtn {
    margin-left: 10px;
    font-size: 23px;
    color: #9E9D89;
  }

  .nextBtn:hover{
      cursor : pointer;
  }
`;

const Day = styled.div`
  font-weight: bolder;
  font-size: 20px;
  color : ${(props) => (props.idx === 0 ? "tomato" : "#b4846c")};
`;

const Circle = styled.div`
  background-color: ${(props) => (props.idx > props.day ? "#FFF5EB" : "#E3CDC1")};
  width: 25px;
  height: 25px;
  margin: 0 10px;
  border-radius: 50%;
`;

export default Main;
