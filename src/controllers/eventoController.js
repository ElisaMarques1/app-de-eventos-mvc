const eventoModel = require("../models/eventoModel");

function exibirPaginaEventos(request, response) { 
    response.render('evento');
}

function exibirPaginaCriarEventos(request, response) { 
    response.render('criarEvento');
}

function adicionarEvento(request, response) { 
    console.log(request.body);

    const { titulo, local, data } = request.body;

    eventoModel.adicionarEvento(titulo, local, data);

    response.redirect('/');
}


module.exports = {
    exibirPaginaEventos,
    exibirPaginaCriarEventos,
    adicionarEvento
};