const evento = [];

function adicionarEvento(titulo, local, data) {
    evento.push({
        id: Date.now(), 
        titulo: titulo, 
        local: local, 
        data: data
    });
    
}

module.exports = {
    adicionarEvento
}