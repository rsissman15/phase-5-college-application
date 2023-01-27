import styled from "styled-components";

function Error({ children }) {
  return (
    <Wrapper>
      <Alert>!</Alert>
      <Message>{children}</Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: lightBlue;
  background-color: linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%);
  border-radius: 2px;
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 10px;
  margin: 8px 0;
  fontSize: 8;
`;

const Alert = styled.span`
  background-color: white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-weight: bold;
  display: grid;
  place-content: center;
  
`;

const Message = styled.p`
  margin: 0;
  fontSize: 8;
`;

export default Error;