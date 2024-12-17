import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        email: '', 
        password: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState('');

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
            setMessage('Cadastro realizado com sucesso!');
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
        <div className="form-container">
            <h1>Cadastro de Professor</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>  
                        <input
                            type="email"
                            name="email"  
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Confirmar Senha</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RegisterPage;
