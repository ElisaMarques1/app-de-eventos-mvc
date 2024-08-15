function exibirPaginaEventos(request, response) { 
    response.render('evento');
}

function exibirPaginaCriarEventos(request, response) { 
    response.render('criarEvento');
}

module.exports = {
    exibirPaginaEventos,
    exibirPaginaCriarEventos
};