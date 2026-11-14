var database = require("../database/config");

function listar(){
    console.log("ENTREI NO QUESTIONÁRIO MODEL >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");

    //busca as respostas para o mural e traz o nome do usuário com JOIN
    var instrucaoSql = `
        SELECT q.id AS idQuestionario, q.motivacao, q.jogo, q.recomendacao, q.data_envio, q.fkUsuario, u.nome AS nomeUsuario FROM questionario q
        JOIN usuario u ON q.fkUsuario = u.id ORDER BY q.data_envio DESC;`; // DESC para puxar a data mais recente

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

// função do gráfico, busca quantos jogos foram inseridos no banco e quantas vezes foram escolhidos
function contarPorJogo(){
    var instrucaoSql = `
    SELECT jogo, COUNT(*) AS quantidade FROM questionario
    GROUP BY jogo ORDER BY quantidade DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// função usada na tela de edição de comentários para achar o usuário dono da postagem
function buscarPorId(idQuestionario){
    var instrucaoSql = `SELECT q.id AS idQuestionario, q.motivacao, q.jogo, q.recomendacao, q.data_envio, q.fkUsuario, u.nome nomeUsuario FROM questionario q
    JOIN usuario u on q.fkUsuario = u.id WHERE q.id = ?`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [idQuestionario]);
}

function cadastrar(jogo, motivacao, recomendacao, idUsuario){
    var instrucaoSql = `
    INSERT INTO questionario (jogo, motivacao, recomendacao, fkUsuario) VALUES
    (?, ?, ?, ? )`; // parâmetros para evitar que o MySQL quebre com nomes que possuem apóstrofo
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [jogo, motivacao, recomendacao, idUsuario]); // valores são enviados separados justamente pra não quebrar o MySQL
}

function editar(jogo, motivacao, recomendacao, idQuestionario){
    var instrucaoSql = `
    UPDATE questionario SET jogo =  ?, motivacao = ?, recomendacao = ?
    WHERE id = ?`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [jogo, motivacao, recomendacao, idQuestionario]);
}

function deletar(idQuestionario){
    var instrucaoSql = `DELETE FROM questionario WHERE id = ?`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [idQuestionario]);
}

module.exports = {
cadastrar,
listar,
buscarPorId,
editar,
deletar,
contarPorJogo
};
