# Avaliação - Módulo 3 - Fullstack JavaScript

## Projeto 1 - Backend

Criar uma API backend para gerenciar tarefas do dia a dia.

**Nota máxima do projeto:** 10

### Estrutura da Entidade: Tarefas

- Título
- Descrição
- Prioridade (Alta, Média e Baixa)
- Status (Fazer, Fazendo, Feito)
- Prazo
- Data de criação

### Endpoints (3,7 pontos)

- `[GET]` Leitura de todas as tarefas (0,5 pontos)
- `[GET]` Leitura de tarefas individuais (por ID) (0,6 pontos)
- `[POST]` Criação de tarefas (1 ponto)
- `[PUT]` Edição de tarefas por ID (1 ponto)
- `[DELETE]` Exclusão de tarefas por ID (0,6 pontos)

### Requisitos (6,3 pontos)

- Validação de dados em todos os endpoints (1,2 pontos)
- Status Code corretos em todos os endpoints (1,2 pontos)
  - 200, 201, 400, 404, etc
- Persistência de Dados no MongoDB (1,5 pontos)
- Formatação do código utilizando o Prettier (0,6 pontos)
- Exportar os arquivos de requisição (0,5 pontos)
- Deploy do projeto no Heroku (0,6 pontos)
- Deploy do banco de dados na Cloud Atlas (0,7 pontos)

## Projeto 2 - Frontend (integrado com Backend)

Criar uma aplicação frontend web integrada com a API backend criada no projeto 1.

**Nota máxima do projeto:** 10

### Overview

- Home page contendo uma lista de todas as tarefas, organizadas por status
  - A tarefa deverá estar dentro de um card, contendo todas as informações
- Página individual da tarefa (ao clicar em cima de cada tarefa dentro da home page)
- Página de edição da tarefa
  - Acesso ao clicar em um botão na home page ou na página da tarefa
- Página de exclusão da tarefa
  - Acesso ao clicar em um botão na home page ou na página da tarefa

### Páginas (10 pontos)

- Home page:
  - Lista de tarefas (1,5 pontos)
  - Card de cada tarefa (1 ponto)
  - Conexão com as páginas de criação, visualização, edição e exclusão de tarefas (0,4 pontos)
- Página de visualização da tarefa, exibindo todas as informações da tarefa (1,5 pontos)
- Página de criação da tarefa, podendo criar informações para todos os campos (1,8 pontos)
- Página de edição da tarefa, podendo editar todos os campos (1,8 pontos)
- Modal de exclusão da tarefa (1 ponto)
- Tratamento dos erros de acordo com os status enviados pelo backend (1 ponto)