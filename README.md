# ToDo List - Teste Técnico Next.js

Este projeto é uma mini aplicação de ToDo List (Lista de Tarefas) desenvolvida como parte de um teste técnico para avaliar conhecimentos em Next.js, React e na construção de APIs.

A aplicação permite que os usuários criem, visualizem, atualizem (marcando como concluída) e deletem tarefas, com todas as interações gerenciadas por uma API backend construída com Next.js API Routes.

## 🚀 Deploy

A aplicação está disponível para teste no seguinte link:

[**https://thiagosaraivacods-todolist.vercel.app**](https://thiagosaraivacods-todolist.vercel.app)

## ✨ Funcionalidades

- [x] **Criar novas tarefas:** Um formulário permite a adição de novas tarefas.
- [x] **Marcar/Desmarcar tarefas:** É possível alternar o status de uma tarefa entre pendente e concluída.
- [x] **Excluir tarefas:** Cada tarefa pode ser removida da lista.
- [x] **Validação de Formulário:** O campo de criação não permite o envio de tarefas vazias.
- [x] **Backend Integrado:** Todas as operações (CRUD) são processadas por uma API RESTful.
- [x] **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

- **Next.js:** Framework React para produção, utilizando o **App Router**.
- **React:** Biblioteca para construção de interfaces de usuário.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **TailwindCSS:** Framework de CSS utility-first para estilização.
- **React Hook Form & Zod:** Para gerenciamento de formulários de forma performática.
- **API Routes (Next.js):** Para a construção do backend e dos endpoints da API.
- **Mock de Dados em Memória:** Os dados são armazenados em uma variável no lado do servidor, conforme solicitado no teste.

## 🏁 Rodando o Projeto Localmente

Para executar este projeto em sua máquina local, siga os passos abaixo.

**Pré-requisitos:**

- **Node.js** (versão 18 ou superior)
- **npm**, **yarn** ou **pnpm**

**Passos:**

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/ThiagoSaraiva-Cods/to-do-list.git](https://github.com/ThiagoSaraiva-Cods/to-do-list.git)
    ```

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd to-do-list
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Rode o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  **Abra o navegador:**
    Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação em funcionamento.

## 📝 Endpoints da API

A API construída para este projeto segue os padrões RESTful e possui os seguintes endpoints:

| Método   | Endpoint          | Descrição                                   |
| :------- | :---------------- | :------------------------------------------ |
| `GET`    | `/api/tasks`      | Retorna a lista completa de tarefas.        |
| `POST`   | `/api/tasks`      | Cria uma nova tarefa.                       |
| `PATCH`  | `/api/tasks/{id}` | Alterna o status `completed` de uma tarefa. |
| `DELETE` | `/api/tasks/{id}` | Exclui uma tarefa específica.               |
