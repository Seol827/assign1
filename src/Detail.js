import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();
  const history = useHistory();

  const [circle, setCircle] = React.useState(0);

  //(+)onKeyDown event
  window.onkeydown = (e) => {
    if (e.key <= 5) setCircle(e.key);
    else {
      setCircle(0);
    }
  };

  return (
    <Back>
      <Content>
        <h2><span>{param.day}요일</span> 평점 남기기</h2>
        <Item>
          {Array.from({ length: 5 }, (_, idx) => {
            return (
              <Circle idx={idx} circle={circle}
                key={idx}
                onClick={() => {
                  setCircle(idx + 1);
                }}
              ></Circle>
            );
          })}
        </Item>
        <h4 style={{ color: "#b4846c" }}>키보드 숫자 1~5 입력이 가능합니다.</h4>
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          완료
        </button>
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
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  height: 400px;
  width: 300px;
  min-width: 300px;

  h2 {
    color: #A0937D;
    fontWeight: bolder;
  }

  span {
    padding: 7px;
    background-color: tomato;
    border-radius: 5px;
    color: white;
  }

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

const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  justify-content: center;
  alignitems: center;

  div:hover {
    cursor: pointer;
  }
`;

const Circle = styled.div`
  background-color: ${(props) => (props.circle < props.idx + 1 ? '#FFF5EB' : '#E3CDC1')};
  width: 25px;
  height: 25px;
  margin : 10px 10px;
  border-radius : 50%;
`;


export default Detail;
