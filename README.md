# Desafio | Fullstack

O teste consiste em implementar uma lista de contatos e empresas. O projeto, obrigatoriamente, deve ser separado em backend e frontend.

## Backend

O backend **deve** ser desenvolvido em `php` e **deve** conter uma API Rest.

O sistema deve conter as seguintes entidades e seus respectivos campos:

- Usuário
    - Nome: obrigatório para preenchimento
    - E-mail: obrigatório para preenchimento
    - Telefone: não obrigatório
    - Data de nascimento: não obrigatório
    - Cidade onde nasceu: não obrigatório
    - Empresas: obrigatório para preenchimento

- Empresa
    - Nome: obrigatório para preenchimento
    - CNPJ: obrigatório para preenchimento
    - Endereço: obrigatório para preenchimento
    - Usuários: obrigatório para preenchimento

A regra de relacionamento para `Usuário` e `Empresa` deve ser de __n para n__

### Banco
Você **deve** utilizar um banco de dados para o sistema. Pode-se escolher qualquer opção que desejar, mas o seguite cenário deve ser levado em consideração:
- O sistema lida com informações sensíveis e preza pela integridade dos dados
- O sistema lida com diferentes entidades relacionadas

Pedimos para que nos sinalize o motivo da escolha do banco no final do documento


## Frontend
O frontend **deve** ser desenvolvido utilizando `react` e **deve** usar os dados fornecidos pela API.

Você **pode** e, de preferência, **deve** utilizar bibliotecas de terceiros.

Deve-se desenvolver uma página de formulário para cada uma das entidades (`Usuario` e `Empresa`). Também deve ser desenvolvida uma página listando todos os usuários e seus respectivos campos, inclusive todas as empresas de que ele faz parte.

Deve-se ter a possibilidade de filtrar os dados conforme cada um dos campos.

Obs: para facilitar, segue uma proposta de layout, você tem liberdade para desenvolver o layout da forma que achar mais adequado.

## Testes
Testes unitários **devem** ser implementados no backend para validação das operações do CRUD.

Testes unitários **devem** ser implementados no frontend para a tela de exibição dos usuários.

Você pode utilizar o framework de sua preferência tanto para o backend quanto para o frontend.

## Ambiente
Aqui na Contato Seguro, utilizamos __Docker__ nos nossos ambientes, então será muito bem visto caso decida utilizar. Principalmente para que tenhamos o mesmo resultado (mesma configuração de ambiente). Caso desenvolva com docker, nos envie junto com o projeto o `docker-compose.yml` e/ou os `Dockerfile´`s.

## Requisitos mínimos
- As 4 operações CRUD, tanto para entidade `Usuário`, quanto para `Empresa`. Todas as operações devem ter rotas específicas no backend.
- O filtro de registros
- Código legível, limpo e seguindo boas práticas de Orientação a Objetos
- Um dump ou DDL do banco de dados
- Testes unitários

## Requisitos bônus
- Utilizar Docker
- Outras entidades e relacionamento entre entidades. Por exemplo: uma entidade `Relatos` ou `Atividades` que tenha `Usuários` e/ou `Empresas` vinculadas.
- Separação em commits, especialmente com boas mensagens de identificação.

# Resposta do participante
_Responda aqui quais foram suas dificuldades e explique a sua solução_

## 📱 DecisionMake

  Ao decidir quais tecnologias utilizar no meu projeto, levei em consideração o contexto de associações, segurança, integridade dos dados. Para o banco de dados, escolhi o MySQL devido à sua grande maturidade no mercado e capacidade de manter a integridade dos dados. Além disso, decidi utilizar o Sequelize como ORM, devido à sua popularidade no mercado, segurança e suporte da comunidade.

No Backend, optei pela arquitetura MSC (Model, Service, Controller), implementei um sistema de login com http-only cookie. Esse sistema oferece maior segurança à aplicação, já que o controle de autenticação fica por conta do backend, sem que o JavaScript do frontend tenha acesso ao token de autenticação. Fiz uso da biblioteca Zod para validações, bcrypt para criptografia de senhas no banco de dados e jwt para validação de token. Também implementei testes unitários com mocha, chai e sinon.

Para a estilização no frontend, decidi utilizar as bibliotecas TailwindCSS e DaisyUI, por serem performáticas, fáceis de utilizar e já possuírem responsividade incorporada. Além disso, essas bibliotecas permitem uma grande liberdade de personalização. Para manipulação de formulários utilizei react-hook-form integrado com o Yup. Zustand como biblioteca de estado global devido ao tamanho do projeto.


## Dificuldades:
- Integração do sequelize com Typescript
- Componentizar o Frontend
- Integrar algumas bibliotecas com os testes

## O que faria diferente?

- Focaria em fazer os requisitos obrigatórios, após isso, faria os bônus
- Usaria um framework no backend
- Mudaria para um ORM no qual tivesse melhor compatibilidade com Typescript

### 📋 Pré-requisitos

Para conseguir rodar o projeto você pode precisar dos seguintes itens:

- [Node](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/docs/getting-started)
- [docker](https://www.docker.com/)

## 🔧 Instalando as dependencias

Acesse a pasta `backend` e execute

```
yarn install
```

Se não existe, crie um arquivo `.env` com as informações:

```
DB_USER=root
DB_PASS=password
DB_NAME=db
DB_HOST=localhost
DB_PORT=3002

JWT_SECRET=secret
FRONTEND_URL=http://localhost:3000
```

Agora, acesse a pagina do `frontend` e instale as dependencias:

```
yarn install
```

Se não existir crie um arquivo `.env` com a URL do `backend`, exemplo:

```
VITE_BACKEND_URL=http://localhost:3001
```

## 🚀 Rodando a aplicação

- Certifique-se que as portas `3000`, `3001` e `3002` estão livres. 
- Rode o comando na pasta inicial do projeto:

```
yarn compose:dev
```

Esse comando criará os containers do Banco de dados, Backend e Frontend.

Aguarde o healthcheck acontecer, após isso as aplicações estarão online

### Criando a database e populando o banco de dados:

Acesse a pasta `backend` e popule o banco de dados:

```
yarn db:reset
```

### Para efetuar o login informe o email e senha na pagina de login:

- Para acessar o Frontend entre na URL: `http://localhost:3000/`
- Para acessar o Backend entre na URL: `http://localhost:3001/`
```
Email: admin@gmail.com
Senha: secret_admin
```

## 🛠️ Bibliotecas e Ferramentas

### Frontend
- Vite
- React
- Typescript
- react-query
- axios
- tailwindcss
- daisyui
- react-router
- react-hook-form
- yup
- zustand
- react-icons
- eslint
- react-testing-library
- vitest

### Backend
- express
- typescript
- sequelize
- zod
- express-async-errors
- cookie-parser
- bcryptjs
- cors
- dotenv
- http-status-codes
- jsonwebtoken
- mocha
- chai
- sinon
- nyc
- eslint
- faker-js

## Melhorias

- Corrigir alguns tipos inconsistentes;
- Testar as duas aplicações 100%;
- Tornar o Modal de criação e o de Edição em um modal genérico para todas as entidades.
- Poder desassociar um usuário de uma empresa ao editar um usuário.

## Documentação da API

### Auth
#### Cria um usuáiro de autenticação

```http
  POST /auth/register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. Nome do usuário de autenticação |
| `email` | `string` | **Obrigatório**. Email do usuário de autenticação |
| `password` | `string` | **Obrigatório**. Senha do usuário de autenticação |

#### Retorna o status de autenticação na aplicação

```http
  GET /auth/status
```

#### Efetua o login

```http
  POST /auth/login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. Email para efetuar login |
| `password`      | `string` | **Obrigatório**. Senha para efetuar login |

#### Efetua o logout

```http
  POST /auth/logout
```

### User

#### Cria um usuário

```http
  POST /user
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O Nome do usuário |
| `email`      | `string` | **Obrigatório**. O Email do usuário |
| `phone`      | `string` | O Telefone do usuário |
| `dateOfBirth`      | `string` | Data de nascimneto do usuário |
| `cityOfBirth`      | `string` | Cidade que o usuário nasceu |
| `companies`      | `string` | Lista de empresas que o usuário tem releção |

#### Lista todos os usuários

```http
  GET /user
```

#### Busca um usuário especifico

```http
  GET /user/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do usuário |

#### Atualiza os dados de um usuário

```http
  PUT /user/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do usuário |
| `name`      | `string` |  O novo nome do usuário |
| `email`      | `string` | O novo email do usuário |
| `phone`      | `string` | O novo telefone do usuário |
| `dateOfBirth`      | `string` | Data de nascimneto do usuário |
| `cityOfBirth`      | `string` | Cidade que o usuário nasceu |

#### Deleta um usuário

```http
  DELETE /user/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do usuário |

### Company

#### Cria uma empresa

```http
  POST /company
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome da empresa |
| `cnpj`      | `string` | **Obrigatório**. CNPJ da empresa |
| `address`      | `string` | **Obrigatório**. Endereço da empresa |
| `city`      | `string` | **Obrigatório**. Cidade onde está a empresa |
| `state`      | `string` | **Obrigatório**. Estado onde está a empresa |

#### Lista todas as empresas

```http
  GET /company
```

#### Busca uma empresa especifica

```http
  GET /company/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da empresa |

#### Atualiza os dados de uma empresa

```http
  PUT /company/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da empresa |
| `name`      | `string` | Novo nome da empresa |
| `cnpj`      | `string` | Novo CNPJ da empresa |
| `address`      | `string` |  Novo endereço da empresa |
| `city`      | `string` | Nova cidade onde está a empresa |
| `state`      | `string` | Novo estado onde está a empresa |

#### Deleta uma empresa

```http
  DELETE /company/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da empresa |

### Report

#### Cria um relato

```http
  POST /report
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `userId`      | `number` | **Obrigatório**. Id do usuário |
| `companyId`      | `number` | **Obrigatório**. Id da empresa |
| `description`      | `string` | **Obrigatório**. Descrição do relato |

#### Lista todos os relatos

```http
  GET /report
```

#### Busca um relato especifico

```http
  GET /report/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do relato |

#### Atualiza a descrição de um relato

```http
  PUT /report/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do relato |
| `description`      | `string` |  **Obrigatório**. A nova descrição do relato |

#### Deleta um relato

```http
  DELETE /report/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do relato |
