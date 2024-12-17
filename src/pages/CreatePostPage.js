import React, { useState } from 'react';
import { createPost } from '../services/api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilização
const Container = styled.div`
  max-width: 800px;
  margin: 6rem auto 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
  height: 120px;
  width: 100%;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-weight: bold;
  color: #555;
`;

const Button = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const BackButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CreatePostPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(formData);
      alert('Post criado com sucesso!');
      setFormData({ title: '', content: '', author: '' });
      navigate(-1);
    } catch (error) {
      console.error('Erro ao criar post:', error);
      alert('Erro ao criar post.');
    }
  };

  return (
    <Container>
        
        <Title>Criar Novo Post</Title>
            <Form onSubmit={handleSubmit}>
            <InputWrapper>
            <Label htmlFor="title">Título</Label>
            <Input
                id="title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            </InputWrapper>

            <InputWrapper>
            <Label htmlFor="content">Conteúdo</Label>
            <TextArea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
            />
            </InputWrapper>

            <InputWrapper>
            <Label htmlFor="author">Autor</Label>
            <Input
                id="author"
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
            />
            </InputWrapper>
            <Button type="submit">Criar Post</Button>
        </Form>
            <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
    </Container>
  );
};

export default CreatePostPage;
