import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../../../components/Icon';

const WrapperForm = styled.form`
  padding: 12px;
  display: flex;
  align-items: center;
`;

const InputText = styled.input`
  height: 32px;
  flex: 1;
  border: 1px solid #d9dbde;
  outline: none;
  border-radius: 3px;
  padding: 4px 8px;
`;

const Button = styled.button`
  width: 50px;
  height: 32px;
  border: none;
  background: transparent;
  color: #0088cc;

  &:disabled {
    cursor: not-allowed;
    color: #d9dbde;
  }
`;

type Props = {
  send: Function;
};

function Form({ send }: Props) {
  const [value, setValue] = useState('');

  const handleChange = (event: {
    preventDefault: Function;
    target: { value: string };
  }) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: Function }) => {
    event.preventDefault();
    send({
      text: value,
      isMe: true,
    });
    setValue('');
    setTimeout(() => {
      send({
        text: 'Response',
        isMe: false,
      });
    }, 2000);
  };

  return (
    <WrapperForm onSubmit={handleSubmit}>
      <InputText
        type="text"
        placeholder="Write a message..."
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit} disabled={!value}>
        <Icon name="send" size={24} />
      </Button>
    </WrapperForm>
  );
}

export default Form;
