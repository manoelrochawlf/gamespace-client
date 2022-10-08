import styled from "styled-components";

export default function Banner() {
  return (
    <Div>
      <Div2>
        <Div3>GameSpace X</Div3>
        <Immerseyourselfinalibrary>
          Immerse yourself in a library of over 100 high-quality games.{" "}
        </Immerseyourselfinalibrary>
      </Div2>
    </Div>
  );
}


const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 2000px;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 29px;
  padding-right: 24px;
  padding-bottom: 29px;
  padding-left: 24px;
  background-image: url("https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F144699317def43b3a601486c6ae337dc");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 70px 70px;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Div3 = styled.div`
  max-width: 233.49485778808594px;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0%;
  text-align: left;
  font-family: "Poppins", sans-serif;
`;

const Immerseyourselfinalibrary = styled.div`
  max-width: 362.71044921875px;
  margin-top: 5px;
  color: rgba(248, 249, 250, 1);
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0%;
  text-align: left;
  font-family: "Poppins", sans-serif;
`;

