# AGENTS.md

## Visão Geral
O **The-Legend-of-a-Repository** é um site (aplicação web) criado para fãs da franquia de jogos *The Legend of Zelda*. O objetivo principal do projeto é reunir e organizar informações, guias de jogo, histórias (crônicas) e conteúdos criados pela comunidade em um só lugar, oferecendo uma experiência interativa para os usuários.

## Tecnologias Utilizadas
* **Ambiente de Execução (Back-end):** Node.js
* **Linguagens do Front-end:** HTML5, CSS3 e JavaScript
* **Banco de Dados:** MySQL

### Comandos para Executar o Projeto
* `npm start` — Inicia o sistema em modo de Produção (versão finalizada para o usuário).
* `npm run dev` — Inicia o sistema em modo de Desenvolvimento (reinicia o servidor automaticamente sempre que você salva um arquivo).

---

## Arquitetura e Organização do Projeto (Padrão MVC)
O projeto está organizado usando o padrão **MVC (Model-View-Controller)**. Isso significa que separamos o código visual, as regras do sistema e o banco de dados em pastas diferentes:

* `routes/` — **Rotas:** Contém os arquivos que definem os caminhos e links do site (endpoints). É por onde a requisição do usuário entra.
* `controllers/` — **Controladores:** Contém as funções que recebem os dados do usuário, fazem validações e decidem o que o site deve fazer.
* `models/` — **Modelos:** Contém os arquivos que conversam diretamente com o banco de dados MySQL (comandos SQL).
* `public/` — **Arquivos Públicos:** Guarda a parte visual que o usuário vê no navegador (telas em HTML, folhas de estilo CSS, JavaScript do navegador e imagens).
* `app.js` — **Arquivo Principal:** É o ponto de partida do sistema. Ele liga o servidor e configura o projeto.
* `.env` e `.env.dev` — **Configurações:** Arquivos que guardam dados sensíveis, como a senha do banco de dados.

### Fluxo de Funcionamento (Caminho de uma Requisição)
1. O usuário clica em um botão ou acessa uma página no Front-end (`public/`).
2. O navegador envia um pedido (requisição) que é recebido pelo arquivo de rotas (`routes/`).
3. A rota chama o controlador (`controllers/`) responsável por aquela ação.
4. Se o controlador precisar de dados do banco, ele pede para o modelo (`models/`).
5. O modelo faz a busca no banco MySQL e devolve os dados para o controlador.
6. O controlador recebe os dados e envia a resposta final de volta para o navegador do usuário.

---

## Padrões de Desenvolvimento (Como Escrever o Código)
Para manter o código limpo, organizado e fácil de entender, siga estas regras:

* **Variáveis e Constantes:** Use sempre `const` para criar variáveis. Só use `let` se o valor daquela variável realmente precisar ser alterado/reatribuído mais tarde.
* **Nomenclatura para Variáveis e Banco de Dados (`snake_case`):** Use letras minúsculas separadas por underline. 
  * *Exemplo:* `id_usuario`, `nome_personagem`, `data_criacao`.
* **Nomenclatura para Funções (`camelCase`):** Comece com letra minúscula e a primeira letra das palavras seguintes em maiúscula. 
  * *Exemplo:* `buscarUsuario()`, `validarFormulario()`, `calcularTotal()`.
* **Idioma:** Todo o código, nomes de funções, variáveis, rotas e comentários devem ser escritos em **Português Brasileiro (pt-BR)**.

---

## Controle de Versão (Organização do Git)

### Padrão de Mensagens de Commit
Ao salvar suas alterações no Git, use mensagens curtas seguindo este formato: `tipo(local): descrição`. Os principais tipos são:
* `feat`: Quando você adiciona uma nova função ou página no site.
* `fix`: Quando você corrige um erro (bug) no código.
* `docs`: Quando você muda apenas arquivos de texto e explicações (como este arquivo).
* `style`: Quando você muda o visual, espaçamento ou formatação, sem mexer na lógica.
* `refactor`: Quando você reescreve um código para deixá-lo mais bonito e organizado, sem mudar o que ele faz.

*Exemplo de commit:* `feat(cadastro): adiciona validação de senha no formulário`

### Estrutura de Branches (Ramificações)
* **`main`:** Guarda a versão final, estável e sem erros do projeto. **Nunca** faça alterações direto nela.
* **`dev`:** É a branch de trabalho do dia a dia. Você faz as alterações aqui e, quando tudo estiver testado e funcionando, junta (merge) com a `main`.

---

## Cuidados e Restrições para o Agente de IA

Se você for uma Inteligência Artificial lendo este documento, você deve obedecer estritamente às seguintes regras:

1. **Respeite a Estrutura:** Não mude as pastas de lugar, não mude o padrão MVC e não adicione novas tecnologias sem permissão.
2. **Código Didático e Simples:** Escreva códigos limpos, simples e fáceis de ler. Lembre-se de que o desenvolvedor é um estudante do primeiro período de tecnologia. Evite usar lógicas avançadas ou complicadas demais se uma solução simples resolver o problema.
3. **Não Faça Tudo Sozinho:** Não entregue códigos gigantes ou funcionalidades inteiras de uma vez só. Prefira explicar o passo a passo, mostrar exemplos pequenos e ensinar como resolver o problema para ajudar o estudante a aprender e interagir de forma ativa.
4. **Explique os Erros:** Quando identificar um erro no código do usuário, explique o porquê do erro ter acontecido antes de sugerir a correção.

## Regra Geral
Antes de implementar qualquer alteração, siga as tecnologias, arquitetura, convenções e restrições descritas neste documento. Caso alguma informação esteja ausente, analise o código existente no repositório e siga os padrões que já foram adotados.
