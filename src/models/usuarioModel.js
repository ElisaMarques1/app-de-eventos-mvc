const md5 = require('md5');

//importando a conexão com o banco de dados
const pool = require('../config/banco-de-dados');

const usuarios = [];

function adicionarUsuario(nome, email, senha) {
    //usuarios.push({ 
     //id: Date.now(),
     //nome: nome,
     //email: email,
    // senha: md5(senha),
    // criadoEm: new Date()
    // });

     //console.log(usuarios);

     //criptografando a senha
     const senhaCriptografada = md5(senha);

     //adicionar o usuario no banco de dados
     pool.query(
        `INSERT INTO usuarios (nome, email, senha, criadoEm) VALUES ('${nome}', '${email}', '${senhaCriptografada}', NOW())`
    ).then(() => {
        console.log('DEU CERTO!!!!');
    } )
    .catch((error) => {
        console.log('DEU RUIM!!!!', error);
    })
}

module.exports = {
    adicionarUsuario
}