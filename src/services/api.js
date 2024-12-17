import axios from 'axios';

const API_URL = 'http://localhost:3000/posts';

export const getAllPosts = async () => {
    try {
      const response = await axios.get(API_URL);

      if (Array.isArray(response.data)) {
        return response.data;
      } else {
        console.error('A resposta da API não é um array:', response.data);
        return []; 
      }
    } catch (error) {
      console.error('Erro ao buscar todos os posts:', error);
      return []; 
    }
  };
  

export const getPostById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar o post', error);
    throw error;
  }
};

export const updatePost = async (id, postData) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(`${API_URL}/${id}`, postData, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar o post', error);
      throw error;
    }
};

export const createPost = async (postData) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.post(API_URL, postData, {
        headers: {
            Authorization: `Bearer ${token}` 
        }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao criar post', error);
        throw error;
    }
};
  
export const deletePost = async (id) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}` 
        }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao deletar post:', error);
        throw error;
    }
};


