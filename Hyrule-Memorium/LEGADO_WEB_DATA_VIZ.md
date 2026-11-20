# Legado do web-data-viz

Este documento registra o que foi aproveitado, alterado ou removido do
`web-data-viz` ao criar o Hyrule-Memorium.

O projeto original continua intacto em `../web-data-viz/`.
Cópias dos arquivos substituídos ficam em `legacy/web-data-viz/`.

## O que foi mantido

- Estrutura MVC: `routes`, `controllers`, `models` e `public`.
- `app.js`, `express`, `mysql2`, `dotenv` e `cors`.
- Login e cadastro de usuário.
- `public/js/sessao.js` e as funções de sessão.
- `public/js/alerta.js` para os alertas de temperatura e `public/simulador.html` como página legada.
- `public/dashboard/cards.html` como página legada.

## O que foi adicionado

- Home do Hyrule-Memorium com conteúdo sobre a Triforce e Twilight Princess.
- Página de comunidade em `questionario.html`.
- Mural de memórias em `mural.html`.
- Edição de memórias em `edicao-questionario.html`.
- CRUD de memórias no backend:
  - `src/controllers/questionarioController.js`
  - `src/models/questionarioModel.js`
  - `src/routes/questionarios.js`
- Banco atual em `src/database/hyruleMemorium.sql`.
- Estilos novos em `public/css/style.css` e no final de `dashboards.css`.
- Fontes em `public/fontes/` e imagens do universo Zelda em `public/assets/`.

## O que foi alterado e por quê

### `app.js`

- As rotas de `avisos`, `medidas`, `aquarios` e `empresas` foram desativadas.
- Motivo: os controllers e models desses recursos estão comentados e não são
  usados pelo Hyrule-Memorium.
- As rotas ativas são `index`, `usuarios` e `questionarios`.

### `usuarioController.js` e `usuarioModel.js`

- Foi removido o vínculo do usuário com empresa e aquário.
- Motivo: o banco atual tem apenas `usuario` e `questionario`.
- O login agora devolve apenas `id`, `email` e `nome`.

### `src/database/config.js`

- A função `executar` passou a aceitar parâmetros `?`.
- Motivo: evitar quebra no MySQL com apóstrofos e caracteres especiais.

### `cadastro.html`

- Foram removidos CPF, código de ativação e vínculo com empresa.
- Motivo: o cadastro atual é apenas de usuário.
- Foram adicionadas validações de e-mail, senha e confirmação de senha.

### `login.html`

- O visual AquaTech foi substituído pelo visual Hyrule-Memorium.
- O redirecionamento mudou de `dashboard/cards.html` para
  `dashboard/questionario.html`.
- Motivo: a área logada agora começa na comunidade.

### `index.html`

- A home AquaTech foi substituída pela home do Hyrule-Memorium.
- Motivo: apresentar a Triforce, Twilight Princess e a proposta do projeto.

### `dashboard.html`

- O gráfico de temperatura dos aquários foi substituído pelo gráfico de jogos
  mais marcantes.
- Motivo: o projeto agora trabalha com memórias de jogos.

### `mural.html`

- O mural de avisos foi substituído pelo mural de memórias.
- Motivo: o formulário agora registra jogo, motivação e recomendação.

### `dashboards.css`

- As cores do AquaTech foram substituídas pela paleta Wind Waker.
- Motivo: identidade visual do Hyrule-Memorium.

## O que foi removido e onde está

- `public/css/estilo.css`: restaurado no caminho original e também em `legacy/`.
- `public/dashboard/edicao-aviso.html`: restaurado no caminho original e em `legacy/`.
- `public/assets/icon/`: restaurado no caminho original.
- `public/assets/imgs/`: restaurado no caminho original.
- GIFs de loading: restaurados no caminho original.
- `src/database/script-tabelas.sql`: restaurado no caminho original e em `legacy/`.
- Versões antigas de `index.html`, `login.html`, `cadastro.html`,
  `dashboard.html`, `mural.html`, `cards.html` e `dashboards.css`: mantidas em
  `legacy/web-data-viz/`.

## Por que o backend usa `questionario` e o front usa `Mural`

No AquaTech, o mural publicava **avisos** pela rota `/avisos`. No Hyrule-Memorium,
o formulário passou a registrar respostas sobre jogos na tabela `questionario`,
pela rota `/questionarios`. **Mural** é o nome da página em que essas respostas
aparecem como memórias. Mudar o nome no menu não exige alterar o banco ou a API.

## Regra para o futuro

- Não apagar o `web-data-viz`.
- Não ativar as rotas legadas sem revisar controllers, models e banco.
- Usar `legacy/` apenas como referência de estudo.
