import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  from {
    box-shadow: 0 0 0 0 rgba(164, 222, 2, 0.7);
  }
  to {
    box-shadow: 0 0 10px 10px rgba(164, 222, 2, 0);
  }
`;

const Button = styled.button`
  background-color: white;
  color: #287233;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, color 0.3s;
  animation: ${pulse} 2s infinite;

  &:hover {
    background-color: #a4de02;
    color: white;
  }
  &:focus {
    box-shadow: 0 0 0 2px rgba(164, 222, 2, 0.5);
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #287233;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 2px solid white;
  border-radius: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
`;




const Register = () => {
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log(userData);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input name="username" type="text" placeholder="Usuario" onChange={handleChange} />
        <Input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <Input name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
        <Button type="submit">Registrarse</Button>
      </Form>
    </FormContainer>
  );
}

export default Register;
