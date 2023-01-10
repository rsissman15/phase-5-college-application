import React from "react";
import styled from "styled-components";


function LoginPage({}) {
    

    return (
        <Wrapper className="loginForm">
            <div>HI</div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default LoginPage;