# 🎴 Flash Flow

Uma aplicação web desenvolvida com **React**, **TypeScript**, **Vite** e **Tailwind CSS** para gerenciamento de flashcards.

A aplicação consome uma API REST responsável pelo armazenamento dos dados e permite criar, visualizar, editar, remover e filtrar flashcards por categoria.

---

## 🚀 Tecnologias

![React](https://img.shields.io/badge/React-19.2.6-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6)
![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.3.0-06B6D4)
![Axios](https://img.shields.io/badge/Axios-1.16.1-5A29E4)
![Clsx](https://img.shields.io/badge/Clsx-2.1.1-black)

---

# 📖 Sobre o Projeto

O Flash Flow Web é uma interface moderna para gerenciamento de flashcards.

A aplicação foi construída consumindo uma API REST e possui funcionalidades para:

* 📋 Listar flashcards
* ➕ Criar novos flashcards
* ✏️ Editar flashcards existentes
* 🗑️ Remover flashcards
* 🏷️ Filtrar flashcards por categoria

---

# ✨ Funcionalidades

### Gerenciamento de Flashcards

* Visualização de todos os flashcards cadastrados
* Cadastro de novos flashcards
* Atualização de flashcards existentes
* Exclusão de flashcards
* Atualização automática da interface após operações

### Categorias

* Carregamento das categorias diretamente da API
* Filtro dos flashcards por categoria

### Interface

* Componentes reutilizáveis
* Modais para interação com o usuário
* Layout responsivo
* Estilização moderna utilizando Tailwind CSS

---

# 🏗️ Estrutura do Projeto

```text
src/
│
├── assets/
│   └── imagens do projeto
│
├── components/
│   ├── Button
│   ├── Textarea
│   ├── Modals
│   └── demais componentes reutilizáveis
│
├── services/
│   ├── api.ts
│   ├── flashcards.ts
│   └── categories.ts
│
├── types/
│
├── App.tsx
└── main.tsx
```

---

# 🎨 Componentização

A aplicação utiliza uma pasta dedicada para componentes reutilizáveis.

Exemplos:

* Button
* Textarea
* Modal de criação / edição
* Modal de confirmação de exclusão

Essa abordagem facilita:

* Reutilização de código
* Manutenção
* Escalabilidade do projeto
* Consistência visual

---

# 🔌 Integração com API

A comunicação com o backend é realizada através do Axios.

Foi criada uma instância compartilhada para centralizar configurações da API.

Exemplo:

```typescript
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});
```

---

# 📂 Services

A pasta `services` concentra todas as chamadas para a API.

### Flashcards

Responsável pelas operações:

* Buscar flashcards
* Criar flashcards
* Atualizar flashcards
* Remover flashcards

### Categories

Responsável por:

* Buscar todas as categorias disponíveis

---

# ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000
```

---

# 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/igorjosiel/FlashFlow-2.0.git
```

Entre na pasta:

```bash
cd web/
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
  "dev": "vite"
}
```

A aplicação estará disponível em:

```text
http://localhost:5173
```

---

# 🏗️ Build de Produção

Gerar build otimizada:

```bash
npm run build
```

Script utilizado:

```json
{
  "build": "tsc -b && vite build"
}
```

Os arquivos finais serão gerados na pasta:

```text
dist/
```

---

# 🎨 Estilização

A aplicação utiliza:

### Tailwind CSS 4

Para construção rápida e consistente da interface.

### Clsx

Para composição condicional de classes CSS.

Exemplo:

```typescript
import clsx from 'clsx';

const buttonClass = clsx(
  'rounded-lg px-4 py-2',
  isActive && 'bg-primary text-white'
);
```

---

# 👨‍💻 Autor

Projeto desenvolvido com React, TypeScript, Vite e Tailwind CSS para prática de desenvolvimento frontend moderno e integração com APIs REST.
