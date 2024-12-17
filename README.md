
# README

## Descrição do Projeto

Este repositório contém o front-end de um sistema de gerenciamento de posts. O projeto foi desenvolvido com React e Styled Components, com foco em responsividade, acessibilidade e uma boa experiência de uso. Ele se comunica com um back-end através de APIs REST para operações de leitura, criação, edição e exclusão de posts.

## Funcionalidades

- **Página Inicial**: Exibe uma lista de posts.
- **Página de Login**: Permite que administradores ou professores façam login para acessar a área de administração.
- **Área de Administração**: Permite a criação, edição e exclusão de posts.
- **Cadastro**: Página para registrar novos usuários (administradores ou professores).
- **Criação e Edição de Posts**: Interface para criar e editar posts de forma simples e intuitiva.

---

## Tecnologias Utilizadas

- **React**: Framework para construção da interface.
- **Styled Components**: Biblioteca para estilização em JS, usada para criar componentes de estilo reutilizáveis e modulares.
- **React Router**: Para roteamento e navegação entre as páginas.
- **Axios**: Para realizar requisições HTTP para a API backend.
- **React Hooks**: Para gerenciar estado e efeitos colaterais no React.

---

## Setup Inicial

### Pré-requisitos

Antes de começar, certifique-se de que você tenha as seguintes ferramentas instaladas:

- **Node.js** (Recomendado: v16 ou superior)
- **npm** ou **yarn** (gerenciadores de pacotes)

### Instalação

1. Clone o repositório para o seu diretório local:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências usando `npm`:
   ```bash
   npm install
   ```

4. Inicie a aplicação no modo de desenvolvimento:
   ```bash
   npm start
   ```

   Isso abrirá a aplicação no navegador, geralmente em `http://localhost:3000`.

### Variáveis de Ambiente

Se você estiver se conectando a um backend, pode ser necessário configurar variáveis de ambiente para URLs de API, tokens de autenticação, entre outros.

Crie um arquivo `.env` na raiz do seu projeto e adicione as variáveis necessárias, como:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

## Guia de Uso

### Página de Login

A página de login permite que os administradores ou professores se autentiquem. Após o login bem-sucedido, eles serão redirecionados para a página de administração.

### Página de Administração

Na área de administração, você pode realizar as seguintes ações:

- **Visualizar Posts**: A lista de todos os posts criados.
- **Criar Novo Post**: Formulário para adicionar novos posts.
- **Editar Post**: Ação para editar posts existentes.
- **Excluir Post**: Exclusão de posts da plataforma.

### Proteção de Rotas

Rotas como a de administração estão protegidas. Se um usuário não estiver autenticado e tentar acessar uma rota protegida, ele será redirecionado para a página de login.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

