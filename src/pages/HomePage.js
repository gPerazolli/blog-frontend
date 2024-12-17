import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../services/api';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 6rem auto 2rem auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const SearchAndCreateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const SearchBox = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${(props) => props.bgColor || '#007bff'};
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-left: 10px;

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
`;

const PostTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

const PostAuthor = styled.p`
  font-size: 1rem;
  color: #777;
`;

const PostDescription = styled.p`
  font-size: 1.1rem;
  color: #333;
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  z-index: 1000;
`;

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    const fetchPosts = async () => {
      const postsData = await getAllPosts();
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/'); 
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HeaderContainer>
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Blog App
          </Link>
        </h1>
        <div>
          {isLoggedIn ? (
            <>
              <Button onClick={() => navigate('/admin')}>
                Admin
              </Button>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </HeaderContainer>
      <Container>
        <Title>Lista de Postagens</Title>
        <SearchAndCreateContainer>
          <SearchBox
            type="text"
            placeholder="Buscar posts por título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {isLoggedIn && (
            <Button onClick={() => navigate('/create')} bgColor="#28a745" hoverColor="#218838">
              Criar Nova Postagem
            </Button>
          )}
        </SearchAndCreateContainer>
        <PostList>
          {filteredPosts.length ? (
            filteredPosts.map((post) => (
              <PostCard key={post._id}>
                <PostTitle>{post.title}</PostTitle>
                <PostAuthor>Autor: {post.author}</PostAuthor>
                <PostDescription>{post.content.substring(0, 100)}...</PostDescription>
              </PostCard>
            ))
          ) : (
            <p>Nenhum post encontrado.</p>
          )}
        </PostList>
      </Container>
    </>
  );
};

export default HomePage;
