function limparFormulario() {
    // limpar o formulário depois de postar
    document.getElementById("textarea_motivacao").value = "";
    document.getElementById("ipt_recomendacao").value = "";
    document.getElementById("select_jogo").selectedIndex = 0; // limpa a seleção 
}


function publicar() {
    var idUsuario = sessionStorage.ID_USUARIO;
    var jogo = document.getElementById("select_jogo").value;
    var motivacao = document.getElementById("textarea_motivacao").value.trim(); // trim() remove os caracteres vazios;
    var recomendacao = document.getElementById("ipt_recomendacao").value.trim();
    var btnEnviar = document.getElementById("btn_enviar");


    if (idUsuario == "" || idUsuario == undefined) {
        window.location = "../login.html"
    }
    else if (jogo == "") {
        alert("Selecione pelo menos um jogo!")
    }
    else if (motivacao.length < 10) {
        alert("Descreva um pouco mais! (no mínimo 10 caracteres)")
    }
    else if (motivacao.length > 1000) {
        alert("Excesso de caracteres! (no máximo 1000)")
    }
    else if (recomendacao.length > 45) {
        alert("Excesso de caracteres! (no máximo 45 para recomendação)")
    }
    else {

        aguardar();
        btnEnviar.disabled = true;

        //enviar as informações
        fetch(`/questionarios/cadastrar/${idUsuario}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                jogo: jogo,
                motivacao: motivacao,
                recomendacao: recomendacao || null
            })
        })

            .then(function (resposta) {
                if (resposta.ok) {
                    alert("Memória publicada com sucesso!");
                    limparFormulario();

                if (document.getElementById("feed_container")) {
                    atualizarFeed();
                    }

                }

                else {
                    alert("Erro ao publicar memória! " + resposta.status) // para mostrar o código do erro
                }
                finalizarAguardar();
                btnEnviar.disabled = false;
            })

            .catch(function (erro) {
                console.log(erro);
                alert("Erro de conexão com o servidor");
                finalizarAguardar();
                btnEnviar.disabled = false
            });

    }
}

