import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const history = useHistory();
  const days = ["월", "화", "수", "목", "금", "토", "일"];

  const rate = days.map((day, idx) => {
    return {
      day: day,
      rate: Math.floor(Math.random() * 5 - 1 + 1),
    };
  });

  return (
    <Back>
      <Content>
        <h2 style={{ color: "#A0937D", fontWeight: "bolder" }}>
          나의 일주일은?
        </h2>
        {rate.map((day, idx) => {
          return (
            <Item>
              <Day key={`days${idx}`}>{day.day}</Day>
              {Array.from({ length: 5 }, (round, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: idx > day.rate ? "#FFF5EB" : "#E3CDC1",
                      width: "25px",
                      height: "25px",
                      margin: "0 10px",
                      borderRadius: "50%",
                    }}
                  ></div>
                );
              })}
              <FontAwesomeIcon
                icon={faCircleRight}
                className="nextBtn"
                style={{
                  marginLeft: "10px",
                  fontSize: "23px",
                  color: "#9E9D89",
                }}
                onClick={() => {
                  history.push(`/detail/${day.day}`);
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
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  justify-content: center;
  alignitems: center;

  .nextBtn:hover{
      cursor : pointer;
  }
`;

const Day = styled.div`
  font-weight: bolder;
  color: #b4846c;
  font-size: 20px;
`;

export default Main;
