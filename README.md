
# README

## Descrição do Projeto

Este repositório contém o front-end de um sistema de gerenciamento de posts. O projeto foi desenvolvido com React e Styled Components, com foco em responsividade, acessibilidade e uma boa experiência de uso. Ele se comunica com um back-end através de APIs REST para operações de leitura, criação, edição e exclusão de posts.

## Funcionalidades

- **Página Inicial (HomePage)**: Exibe uma lista de posts.
- **Página de Post (PostPage)**: Exibe os detalhes de um post individual.
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

## Arquitetura do Projeto

### Estrutura de Diretórios

```
/src
  /assets                # Arquivos estáticos como imagens, fontes, etc.
  /components            # Componentes reutilizáveis
    /Layout              # Layout padrão da aplicação
    /Feedback            # Componente de feedback (mensagens de sucesso ou erro)
    /Header              # Cabeçalho da aplicação (barra de navegação)
  /pages                 # Páginas da aplicação
    HomePage.js          # Página inicial
    PostPage.js          # Página do post individual
    RegisterPage.js      # Página de cadastro
    LoginPage.js         # Página de login
    AdminPage.js         # Página de administração
    CreatePostPage.js    # Página de criação de posts
    EditPostPage.js      # Página de edição de posts
  /services              # Funções para chamadas à API
    api.js               # Interações com a API backend (CRUD de posts)
    auth.js              # Funções relacionadas ao login e autenticação
  /styles                # Arquivos de estilos globais
    GlobalStyles.js      # Estilos globais
  /routes                # Definição de rotas privadas e públicas
    ProtectedRoute.js    # Rota protegida que exige autenticação
  App.js                 # Componente principal da aplicação
  index.js               # Ponto de entrada da aplicação
```

### Arquitetura

- **Componentes**: Divididos entre componentes reutilizáveis (ex: botões, inputs, cabeçalho) e páginas específicas.
- **Roteamento**: Usamos `React Router` para definir as rotas e proteger rotas que exigem autenticação.
- **Gerenciamento de Estado**: O estado dos componentes é gerido usando `useState` e `useEffect` para chamadas assíncronas à API.
- **Estilização**: Usamos `Styled Components` para definir estilos encapsulados e modulares, permitindo a reutilização e manutenção do código com maior facilidade.

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

3. Instale as dependências usando `npm` ou `yarn`:
   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

4. Inicie a aplicação no modo de desenvolvimento:
   ```bash
   npm start
   ```

   ou

   ```bash
   yarn start
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

### Feedback

Após ações como criação, edição ou exclusão de posts, mensagens de feedback são exibidas para informar o sucesso ou erro das operações. Essas mensagens são exibidas com uma cor verde para sucesso e vermelha para erro.

---

## Contribuindo

Se você deseja contribuir para este projeto, siga estas etapas:

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça suas alterações.
4. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`).
5. Envie para o seu repositório fork (`git push origin feature/nova-funcionalidade`).
6. Abra um pull request para o repositório original.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

### Considerações Finais

Esse modelo de README cobre desde o setup até as funcionalidades e detalhes da arquitetura do projeto. Modifique conforme necessário, dependendo de ajustes que possam ser feitos na sua aplicação ou detalhes adicionais que você queira incluir.
