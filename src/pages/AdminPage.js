import React, { useEffect, useState } from 'react';
import { deletePost, getAllPosts } from '../services/api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 6rem auto 2rem auto;
  padding: 2rem;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #333;
  margin: 0;
`;

const Button = styled.button`
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${(props) => props.bgColor || '#007bff'};
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverColor || '#0056b3'};
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PostCard = styled.div`
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostTitle = styled.h2`
  font-size: 1.6rem;
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #555;
  font-size: 1.2rem;
`;

const AdminPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await getAllPosts();
        setPosts(response || []);
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
      }
    };
    loadPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post._id !== id));
      alert('Post excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir post:', error);
      alert('Erro ao excluir post.');
    }
  };

  return (
    <Container>
      <TitleBar>
        <Title>Gerenciamento de Posts</Title>
        <Button
          bgColor="#28a745"
          hoverColor="#218838"
          onClick={() => navigate('/create')}
        >
          + Criar
        </Button>
      </TitleBar>

      {posts.length === 0 ? (
        <EmptyMessage>Nenhum post encontrado.</EmptyMessage>
      ) : (
        <PostList>
          {posts.map((post) => (
            <PostCard key={post._id}>
              <PostTitle>{post.title}</PostTitle>
              <ButtonGroup>
                <Button
                  bgColor="#ffc107"
                  hoverColor="#e0a800"
                  onClick={() => navigate(`/edit/${post._id}`)}
                >
                  Editar
                </Button>
                <Button
                  bgColor="#dc3545"
                  hoverColor="#c82333"
                  onClick={() => handleDelete(post._id)}
                >
                  Excluir
                </Button>
              </ButtonGroup>
            </PostCard>
          ))}
        </PostList>
      )}
    </Container>
  );
};

export default AdminPage;
