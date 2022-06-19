<div align='center'>

# [App de Contatos](https://dcmatheus-contacts-app.herokuapp.com/login)

</div>

[![Aplicação](assets/page.png)](https://dcmatheus-contacts-app.herokuapp.com/login)

Desenvolvido para o desafio técnico Front End da empresa [DIWE](https://diwe.com.br/).

---

## Iniciando a aplicação

- #### Clone o repositório:
    ```bash
    git clone git@github.com:dcmatheus/contacts-app.git
    ```
- #### Entre na pasta do projeto;

- #### Instale as dependências:
    ```bash
    npm install
    ```

- #### Inicie a aplicação:
    ```bash
    npm run dev
    ```

>*A aplicação ficara disponível em http://localhost:3000*

---

## Tecnologias utilizadas

- #### TypeScript: Linguagem de programação;

- #### React: Framework frontend principal;

- #### React Feather: Biblioteca de ícones;

- #### React Responsive: Ferramenta que facilita a aplicação de responsividade;

- #### Tailwind/TailwindStyledComponents: Framework css utilizado na estilização dos componentes;

- #### Vite: Principal builder da aplicação;

- #### Eslint: Ferramenta que mantém o código seguindo os principais padrões da comunidade;

- #### Husky/CommitLint/Commitzen: Manter os commits padronizados;


---

## Estrutura de pastas
Os componentes foram separados baseados no [Atomic Design](https://dcmatheus.notion.site/Atomic-design-f0f6c647b56e44d49efef708bcbac6a6).
```js
src
├── components // Molecules - Componentes mais fundamentais da aplicação
│
├── patterns // Organisms - Componentes complexos formados por diversos componentes fundamentais
│
├── pages // Templates|Pages - Componentes que representam as páginas em si
│
├── api // Conexões com a API
│
├── context // Context da aplicação(contextApi)
│
├── hooks // Hooks react personalizados
│
├── images // Imagens utilizadas na aplicação
│
├── styles // Estilização dos componentes
│
├── types // Arquivos de tipagem
│
└── utils // Arquivos úteis a aplicação que não entram em nenhuma das outras pastas
```

## Deploy

O deploy foi feito utilizando o Heroku.

Link do Deploy: https://dcmatheus-contacts-app.herokuapp.com/
