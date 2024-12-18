import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1.5rem;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  font-weight: bold;
  color: #555;
`;

const Button = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '', 
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage('As senhas não coincidem.');
      return;
    }

    try {
      const { confirmPassword, ...dataToSend } = formData;
      // Envia a requisição para o backend
      const response = await axios.post('http://localhost:3000/teacher/register', dataToSend);
      
      alert('Cadastro realizado com sucesso!');  
   
      setTimeout(() => {
        navigate('/login'); 
      },); 
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message || 'Erro ao cadastrar professor.');
      } else {
        setMessage('Erro ao cadastrar professor.');
      }
      console.error('Erro:', error);
    }
  };

  return (
    <Container>
      <Title>Cadastro de Professor</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Senha</Label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Confirmar Senha</Label>
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Cadastrar</Button>
      </Form>
      {message && <p>{message}</p>}
    </Container>
  );
};

export default RegisterPage;
