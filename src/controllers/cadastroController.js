const usuarioModel = require('../models/usuarioModel');

//responsavel por renderizar a pagina de cadastro
function exibirPaginaLogin(request, response) {
    response.render('cadastro');
}

//responsavel por adicionar um novo usuario
function adicionarUsuario(request, response) {
    console.log(request.body);

    //extrair os dados do corpo da requisição
    const { nome, email, senha } = request.body;

    //adicionar usuario
    usuarioModel.adicionarUsuario(nome, email, senha);

    //redirecionar para a tela de login
    response.redirect('/');
}

module.exports = {
    exibirPaginaLogin,
    adicionarUsuario
}

