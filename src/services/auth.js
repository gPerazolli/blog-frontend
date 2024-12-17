import axios from 'axios';

export const login = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:3000/teacher/login', credentials);
      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token);  
        return { success: true };
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return { success: false, message: 'Erro ao fazer login. Verifique suas credenciais.' };
    }
  };

export const logout = () => {
  localStorage.removeItem('jwtToken');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('jwtToken');
};
