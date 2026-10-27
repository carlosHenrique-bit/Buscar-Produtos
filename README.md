Buscar Produto

API simples de consulta de produtos desenvolvida com Node.js, utilizando o módulo nativo "node:http", sem frameworks externos.

Sobre o projeto

O projeto foi desenvolvido para praticar conceitos fundamentais de desenvolvimento Backend com JavaScript.

A aplicação simula um sistema de estoque de canecas personalizadas, permitindo consultar todos os produtos ou buscar um produto específico pelo ID.

Para simular uma consulta a um banco de dados, o sistema utiliza Promises, async/await e setTimeout, criando um atraso de aproximadamente 2 segundos nas consultas individuais.

Tecnologias utilizadas

- JavaScript
- Node.js
- Módulo HTTP nativo
- JSON
- Promises e async/await

Funcionalidades

- Inicialização de servidor HTTP na porta 3000.
- Consulta da lista completa de produtos.
- Busca dinâmica de produtos pelo ID.
- Simulação de consultas assíncronas.
- Retorno de respostas no formato JSON.
- Tratamento de produtos e rotas não encontrados com HTTP 404.

Rotas disponíveis

Método| Rota| Descrição
GET| "/"| Mensagem inicial do servidor
GET| "/produtos"| Retorna todos os produtos
GET| "/produtos/:id"| Busca um produto pelo ID

Exemplo de resposta

Requisição: "GET /produtos/1"

{
  "id": 1,
  "nome": "Caneca Branca",
  "estoque": 3
}

Caso o produto não exista, o servidor retorna o status HTTP 404 e a mensagem "Produto não encontrado".

Como executar

Pré-requisito: Node.js instalado.

1. Clone o repositório.
2. Abra a pasta do projeto no terminal.
3. Execute o arquivo JavaScript do servidor:

node index.js

4. Acesse "http://localhost:3000/produtos" no navegador.

O projeto utiliza módulos ES do JavaScript. Para executar com "index.js", configure ""type": "module"" no "package.json".

Conceitos praticados

Durante o desenvolvimento, foram trabalhados:

- Criação de servidores com "http.createServer()".
- Utilização de "req" e "res".
- Métodos HTTP e códigos de status.
- Manipulação de URLs com "split()" e "startsWith()".
- Busca em arrays utilizando "find()".
- Conversão de dados com "Number()" e "JSON.stringify()".
- Programação assíncrona com "Promise", "resolve()", "async" e "await".
- Tratamento de erros HTTP.

Objetivo

Consolidar conhecimentos iniciais de Backend e compreender o funcionamento de uma API HTTP antes de avançar para bancos de dados e frameworks como Express.js.

Autor

Carlos Gomes

Projeto desenvolvido como parte dos estudos práticos de desenvolvimento Backend com Node.js.
