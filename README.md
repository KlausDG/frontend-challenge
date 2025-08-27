<img src="https://cdn.me.com.br/logos/me_primary.png" alt="ME">

## ⚡ O Desafio

Criar uma **página de detalhes de um processo** seguindo o layout fornecido.

**Layout disponível em:**  
[Link do Figma](https://www.figma.com/design/Tddaiz626kkBlD4NclUS7m/Front-end-Challenge?node-id=1-4738&m=dev)

> Caso tenha dificuldades para acessar o layout, nos avise.

Os dados apresentados pela página deverão ser consumidos através da seguinte API.

> GET https://api.mercadoe.space/orders/1

---

## Tecnologias utilizadas

- Vue3 (Composition API)
- TypeScript
- Vite
- Vitest
- Vue Unicons

## Padrões aplicados

- **Arquitetura Hexagonal** - Aplicada na implementação das requisições http. Foi criada uma interface de abstração de um HTTP Client e um adaptador do Axios.
- **Atomic Design** - Utilizada a separação de componentes em Atoms, Molecules e Organisms para melhor separação e escalabilidade.
- **Barrel Export** - Padrão utilizado para tornar imports mais limpos e reduzir linhas de código.
- **MVVM** - Vue é um ótimo framework para aplicação desse padrão na criação de componentes.
- **SOLID** - Projeto desenvolvido inteiramente procurando seguir os princípios SOLID.

## Alterações de design

- Como não foi indicada uma biblioteca de ícones para utilizar, optei pela utilização da Vue Unicons por praticidade. Consequentemente alguns icones precisaram ser substituidos e outros possuem apenas um formato similar.
- Como não foi providenciado nenhum layout responsivo, a definição foi feita a meu critério.

## 📋 Requisitos

### ✅ Obrigatórios

- ✅ **Desenvolvimento utilizando Vue2 ou Vue3**
- ✅ **Documentação no README**
  - ✅ Como instalar e rodar o projeto
  - ✅ Tecnologias utilizadas
- ✅ **Design responsivo**
  - ✅ A página deve se adaptar a diferentes tamanhos de tela
- ✅ **Deploy em cloud**
  - ✅ Publicar o projeto em algum serviço (Vercel, Netlify, Render, etc.)

### 💡 Diferenciais

- ✅ Arquitetura simples e organizada (_Keep it simple!_)
- ✅ Testes unitários e/ou e2e _(Jest, Vitest, Cypress, Playwright...)_
  - Dado escopo do projeto, optei por não aplicar teste e2e e substitui-los por simples snapshots.
- ✅ Boas práticas de versionamento e commits claros
- ✅ Explicação de alterações no layout, se houver

---

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Refresh snapshots with [Vitest](https://vitest.dev/)

```sh
npm run test:update
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
