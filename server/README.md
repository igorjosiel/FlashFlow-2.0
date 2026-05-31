# 📚 Flashcards API

Uma API REST desenvolvida para gerenciamento de flashcards utilizando **Node.js**, **Express**, **TypeScript**, **Prisma ORM** e **SQLite**.

O projeto permite consultar, criar, atualizar e remover flashcards, além de listar categorias disponíveis.

---

## 🚀 Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![Express](https://img.shields.io/badge/Express-5.2.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6)
![Prisma](https://img.shields.io/badge/Prisma-5.22.0-2D3748)
![SQLite](https://img.shields.io/badge/SQLite-003B57)
![CORS](https://img.shields.io/badge/CORS-2.8.6-orange)

---

# 📖 Sobre o Projeto

Esta API foi criada para fornecer operações CRUD de flashcards.

Atualmente existem dois módulos principais:

### Flashcards

Permite:

* Listar flashcards
* Criar flashcards
* Atualizar flashcards
* Remover flashcards

### Categories

Permite:

* Listar categorias cadastradas

---

# 🏗️ Arquitetura

O projeto segue uma estrutura organizada por responsabilidades:

```text
prisma/
src/
├── config/
│   ├── prisma.ts
│
├── controllers/
│   ├── Flashcards.ts
│   └── Categories.ts
│
├── routes/
│   ├── Flashcards.ts
│   └── Categories.ts
│
├── middlewares/
│   └── ValidateRequiredFieldsFlashcards.ts
│
├── utils/
│   └── ApiResponse.ts
│
├── enums/
│   └── HttpStatus.ts
│
├── app.ts
│
└── server.ts
```

---

# ⚙️ Variáveis de Ambiente

O projeto utiliza um arquivo `.env`.

Crie um arquivo na raiz:

```env
PORT=3000

DATABASE_URL="file:./dev.db"
```

---

# 🗄️ Banco de Dados

O projeto utiliza **SQLite** juntamente com o **Prisma ORM**.

Modelo utilizado:

```prisma
model Flashcard {
  id         Int      @id @default(autoincrement())
  question   String
  answer     String
  category   String
  createdAt  DateTime @default(now())
}
```

---

# 🔄 Migrations

O banco de dados é controlado através de migrations do Prisma.

Criar uma migration:

```bash
npx prisma migrate dev --name init
```

Aplicar migrations existentes:

```bash
npx prisma migrate deploy
```

Visualizar banco de dados:

```bash
npx prisma studio
```

---

# 📦 Instalação

Clone o projeto:

```bash
git clone https://github.com/igorjosiel/FlashFlow-2.0.git
```

Entre na pasta:

```bash
cd server
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

Script utilizado:

```json
{
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts"
}
```

A API ficará disponível em:

```text
http://localhost:3000
```

---

# 📌 Rotas

## Flashcards

### Buscar todos os flashcards

```http
GET /flashcards
```

### Criar flashcard

```http
POST /flashcards
```

Body:

```json
{
  "question": "O que é Prisma?",
  "answer": "Um ORM moderno para Node.js",
  "category": "Backend"
}
```

---

### Atualizar flashcard

```http
PUT /flashcards/:id
```

Body:

```json
{
  "question": "Pergunta",
  "answer": "Resposta",
  "category": "Categoria"
}
```

---

### Remover flashcard

```http
DELETE /flashcards/:id
```

---

## Categories

### Buscar categorias

```http
GET /categories
```

---

# 🛡️ Middleware de Validação

O middleware:

```text
validateRequiredFieldsFlashcards
```

é executado nas rotas:

```http
POST /flashcards
PUT /flashcards/:id
```

Campos obrigatórios:

```json
{
  "question": "string",
  "answer": "string",
  "category": "string"
}
```

Caso algum campo esteja ausente, a requisição será rejeitada com erro **400 - Bad Request**.

---

# 📤 Padronização das Respostas

As respostas da API são centralizadas através da classe:

```text
ApiResponse
```

Estrutura padrão:

```json
{
  "success": true,
  "message": "Operação realizada com sucesso",
  "data": {}
}
```

Benefícios:

* Padronização das respostas
* Melhor experiência para o frontend
* Facilidade de manutenção
* Estrutura consistente em toda a API

---

# 📚 Enum de Status HTTP

A aplicação utiliza o enum:

```typescript
enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500
}
```

para evitar números mágicos e tornar o código mais legível.

---

# 👨‍💻 Autor

Desenvolvido com TypeScript, Express e Prisma para fins de estudo e prática de desenvolvimento backend.
