import React from 'react';
import { logout } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
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

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    logout();
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <h1>
        <Link to="/">
            Blog App
        </Link>
      </h1>
      <Button onClick={handleLogout}>Logout</Button>
    </HeaderContainer>
  );
};

export default Header;
