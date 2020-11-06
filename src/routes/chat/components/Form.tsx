import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 12px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
`;

const InputText = styled.input`
  height: 32px;
  flex: 1;
`;
const Button = styled.button`
  width: 50px;
  height: 32px;
  border: none;
`;

function Form() {
  return (
    <Wrapper>
      <InputText type="text" />
      <Button>Send</Button>
    </Wrapper>
  );
}

export default Form;
