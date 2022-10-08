import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 270px;
  max-width: 216px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 30px;
  background-color: #1a4a15;
  margin-top: 10px;
  &:hover{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const Div2 = styled.div`
  display: flex;
  position: relative;
  min-width: 20px;
  min-height: 20px;
  max-width: 100%;
  width: 216px;
  border-radius: 10px;
  border-top: solid 8px #1a4a15;
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  position: absolute;
  height: 150px;
  width: 100%;
  top: 0;
  left: 0;
`;

export const Imagesizer = styled.div`
  width: 100%;
  padding-top: 73.14814814814815%;
  pointer-events: none;
  font-size: 0;
`;

export const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 216px;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Div4 = styled.div`
  display: flex;
  font-size: 10px;
  flex-direction: column;
  width: 150px;
  justify-content: center;
  align-items: flex-start;
  padding-top: 6px;
  padding-right: 21px;
  padding-bottom: 6px;
  padding-left: 21px;
`;

export const Div5 = styled.div`
  width: 82px;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  text-align: left;
  font-family: "Poppins", sans-serif;
`;

export const Div6 = styled.div`
  width: 82px;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  text-align: left;
  font-family: "Poppins", sans-serif;
`;