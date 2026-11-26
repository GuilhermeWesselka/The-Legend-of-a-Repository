var questionarioModel = require("../models/questionarioModel"); //chama o model

function cadastrar(req, res){
    //pega os valores para serem usados nas req(uisições) e em campos como res(postas)
    var jogo = req.body.jogo;
    var motivacao = req.body.motivacao;
    var idUsuario = req.params.idUsuario;
    var recomendacao = req.body.recomendacao;
    

    //------colinha dos status----------
    /* 
       201: cadastro/criação
       200: consulta/edição/exclusão OK
       204: lista vazia
       404: questionário não encontrado
       400: dado faltando
       500: erro no banco
    */                                  
   //-----------------------------------


       //------------------colinha das funções-------------------
    /* 
       .then(): executa quando o banco responde com sucesso
       .catch(): executa quando dá erro
       res.status(): define o código/status http da resposta
       .json(): envia o resultado como JSON e termina a resposta
       .send(): envia texto simples
       req.body: dados que vêm do JSON da requisição
       req.params: dados que vêm da URL
    */                                  
   //-----------------------------------------------------------

    if(jogo == undefined || jogo == ""){
        res.status(400).send("O jogo está indefinido!");
    }
    else if(motivacao == undefined || motivacao == ""){
        res.status(400).send("A motivação está indefinida!")
    }
    else if(idUsuario == undefined){
        res.status(400).send("O id do usuário está indefinido!")
    }

    else{
        questionarioModel.cadastrar(jogo, motivacao, recomendacao, idUsuario)
        .then(function (resultado) {
            res.status(201).json(resultado);
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });

    }


}

function listar(req, res){
    questionarioModel.listar()
    .then(function(resultado){
        if(resultado.length >0){ //.length funciona aqui porque o sql me devolve um array
            res.status(200).json(resultado);
        }
        else{
            res.status(204).send("Nenhum resultado encontrado!");
        }

    })
    .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });

}



function buscarPorId(req, res) {
    var idQuestionario = req.params.idQuestionario;

    if (idQuestionario == undefined || idQuestionario == "") {
        res.status(400).send("O id do questionário está indefinido!");
    } else {
        questionarioModel.buscarPorId(idQuestionario)
            .then(function (resultado) {
                if(resultado.length > 0){
                res.status(200).json(resultado[0]);
            } else{
                res.status(404).send("Questionário não encontrado!");
            }

        })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function editar(req, res) {
    var jogo = req.body.jogo;
    var motivacao = req.body.motivacao;
    var recomendacao = req.body.recomendacao;
    var idQuestionario = req.params.idQuestionario;

    if(jogo == undefined || jogo == ""){
        res.status(400).send("O jogo esta indefinido!");
    }
    else if(motivacao == undefined || motivacao == ""){
        res.status(400).send("A motivação está indefinida!")
    }
    else if(idQuestionario == undefined || idQuestionario == ""){
        res.status(400).send("O id do questionário está indefinido!")
    }
    else {
        questionarioModel.editar(jogo, motivacao, recomendacao, idQuestionario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        });
    }

}

function deletar(req, res){
    var idQuestionario = req.params.idQuestionario;

    if(idQuestionario == undefined || idQuestionario == ""){
        res.status(400).send("o id do questionário está indefinido!")
    }
    else {
        questionarioModel.deletar(idQuestionario)
        .then(function (resultado) {
            res.status(200).json(resultado)
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        });
    }
}

function contarPorJogo(req, res){ // req vazio porque a função não recebe parâmetro

        questionarioModel.contarPorJogo()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage)
        });
    
    
}

function contarPorComentario(req, res){
    questionarioModel.contarPorComentario()
    .then(function (resultado) {
        res.status(200).json(resultado);
    })
    .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage)
    })
}


module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    editar,
    deletar,
    contarPorJogo,
    contarPorComentario
};
