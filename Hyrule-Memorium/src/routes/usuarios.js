var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;


 //----------------------------------------colinha de CRUD no backend----------------------------------------
    /* 
       Create (Criar): Método HTTP POST → Comando SQL INSERT INTO (cria um novo registro).
       Read (Ler): Método HTTP GET → Comando SQL SELECT (busca um ou vários registros).
       Update (Atualizar): Métodos HTTP PUT ou PATCH → Comando SQL UPDATE (altera dados existentes).
       Delete (Excluir): Método HTTP DELETE → Comando SQL DELETE FROM (remove um registro).
    */                                  
   //-------------------------------------------------------------------------------------------------------

