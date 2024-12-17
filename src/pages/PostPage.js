import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../services/api';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.4rem;
  color: #333;
`;

const Author = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 2rem;
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #888;
  text-align: center;
`;

const PostPage = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await getPostById(id); 
        setPost(response.data); 
      } catch (error) {
        console.error('Erro ao buscar o post:', error);
      }
    };

    getPost();
  }, [id]);

  if (!post) {
    return <LoadingText>Carregando...</LoadingText>; 
  }

  return (
    <Container>
      <Title>{post.title}</Title>
      <Author><strong>Autor:</strong> {post.author}</Author>
      <Content>{post.content}</Content> 
    </Container>
  );
};

export default PostPage;
