var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

// cadastra uma resposta no questionário
router.post("/cadastrar/:idUsuario", function(req, res) {
    questionarioController.cadastrar(req, res);
});

//lista todas as respostas
router.get("/listar", function(req, res) {
    questionarioController.listar(req, res);
});

// contagem de jogos para o grafico
router.get("/contagem", function(req, res) {
    questionarioController.contarPorJogo(req, res);
});

// buscar uma resposta pelo id
router.get("/buscar/:idQuestionario", function buscarPorId(req, res) {
    questionarioController.buscarPorId(req, res);
});

// editar uma resposta
router.put("/editar/:idQuestionario", function editar(req, res) {
    questionarioController.editar(req, res);
});

// deletar uma resposta
router.delete("/deletar/:idQuestionario", function deletar(req, res) {
    questionarioController.deletar(req, res);
});

module.exports = router;