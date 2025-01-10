# Takeat Web

Este projeto é uma aplicação **React** criada como parte de um teste técnico para a empresa Takeat. Ele utiliza tecnologias modernas como **Vite**, **TypeScript** e **Vitest** para um ambiente de desenvolvimento rápido e eficiente. Além disso, o projeto conta com integrações para linting e testes automatizados via **GitHub Workflows**.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão recomendada: 18 ou superior)
- [npm](https://www.npmjs.com/)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/GutembergLamark/takeat-web.git
   cd takeat-web
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Scripts Disponíveis

Os seguintes scripts estão disponíveis no projeto:

### Desenvolvimento

- **`npm run dev`**

  Inicia o servidor de desenvolvimento com **Vite**.

  ```bash
  npm run dev
  ```

### Build de Produção

- **`npm run build`**

  Gera uma build otimizada para produção.

  ```bash
  npm run build
  ```

- **`npm run preview`**

  Pré-visualiza a build de produção.

  ```bash
  npm run preview
  ```

### Testes

- **`npm run test`**

  Executa os testes automatizados com **Vitest**.

  ```bash
  npm run test
  ```

- **`npm run test:watch`**

  Executa os testes em modo de observação para desenvolvimento.

  ```bash
  npm run test:watch
  ```

- **`npm run test:list`**

  Lista todos os testes disponíveis no projeto.

  ```bash
  npm run test:list
  ```

### Linting

- **`npm run lint:eslint:check`**

  Verifica problemas de linting com **ESLint**.

  ```bash
  npm run lint:eslint:check
  ```

- **`npm run lint:prettier:check`**

  Verifica problemas de formatação com **Prettier**.

  ```bash
  npm run lint:prettier:check
  ```

- **`npm run lint:prettier:fix`**

  Corrige problemas de formatação automaticamente.

  ```bash
  npm run lint:prettier:fix
  ```

### Criação de Templates

- **`npm run create-template`**

  Script utilitário para criar templates React personalizados.

  ```bash
  npm run create-template
  ```

  Criando módulos.

  ```bash
  npm run create-template -- --module <ModulePage> <ModuleName>
  ```

  Criando componentes.

  ```bash
  npm run create-template -- --component --<general | form | field | modal> <ComponentName>
  ```

## Integração com GitHub Actions

Este projeto utiliza **GitHub Workflows** para:

- Executar testes automatizados.
- Verificar a qualidade do código com **Prettier**.

Os workflows são executados automaticamente em cada push ou pull request, garantindo que o código esteja sempre em conformidade com os padrões estabelecidos.

## Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Vitest**
- **SASS**
- **Zod**
- **Framer Motion**
- **React Toastify**
- **React Router DOM**

## Autor

Desenvolvido por **Gutemberg Lamark**.
