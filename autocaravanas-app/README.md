# Autocaravanas — Projeto Final React

Aplicação web desenvolvida em React para pesquisa e reserva de autocaravanas.

## Sobre o Projeto

O projeto permite consultar autocaravanas, pesquisar e filtrar resultados, consultar os detalhes de cada veículo, verificar disponibilidade e efetuar reservas.

A aplicação comunica com uma API local responsável pelos dados das autocaravanas e das reservas.

## Funcionalidades

* Listagem de autocaravanas
* Pesquisa por nome
* Filtro por tipo de autocaravana
* Filtro por zona de levantamento
* Ordenação por preço
* Ordenação por avaliação
* Sistema de favoritos através do `localStorage`
* Página de detalhes de cada autocaravana
* Formulário de reserva
* Validação dos dados da reserva
* Verificação de disponibilidade
* Cálculo do preço total da reserva
* Consulta das reservas
* Cancelamento de reservas
* Página 404 para rotas inexistentes

## Tecnologias

* React 19
* JavaScript
* Vite
* React Router
* Tailwind CSS
* Fetch API
* LocalStorage

## Como Executar

### Pré-requisitos

É necessário ter instalado:

* Node.js
* npm

### Instalação

Dentro da pasta `autocaravanas-app`, instalar as dependências:

```bash
npm install
```

### Iniciar a aplicação

```bash
npm run dev
```

A aplicação ficará disponível no endereço indicado pelo Vite, normalmente:

```text
http://localhost:5173
```

## API

O frontend utiliza uma API local para obter as autocaravanas e gerir as reservas.

A API deve estar a correr em:

```text
http://localhost:3001
```

É necessário iniciar a API antes de utilizar as funcionalidades que dependem dos dados e das reservas.

## Estrutura do Projeto

```text
src/
├── components/
│   ├── caravans/
│   └── common/
├── hooks/
├── pages/
├── routes/
├── services/
└── utils/
```

### Principais pastas

* `components/` — componentes reutilizáveis da interface
* `hooks/` — lógica reutilizável com React Hooks
* `pages/` — páginas da aplicação
* `routes/` — configuração das rotas
* `services/` — comunicação com a API
* `utils/` — validações e cálculos auxiliares

## Reservas

O preço da reserva é calculado com base no preço diário da autocaravana e no número de dias da reserva.

A contagem inclui o dia de levantamento e o dia de devolução.

Por exemplo:

```text
10/05 → 13/05 = 4 dias
```

## Autores

Projeto desenvolvido no âmbito do Projeto Final React.
