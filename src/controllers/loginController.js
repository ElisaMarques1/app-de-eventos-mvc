const md5 = require('md5');
const usuarioModel = require('../models/usuarioModel');

function exibirPaginaLogin(request, response) {
   response.render('login');
}

async function autenticarUsuario(request, response) {

//pegar as informações do usuario
const { email, password } = request.body;
console.log(email, password);

//buscar o usuario no banco de dados
const usuario = await usuarioModel.buscarUsuarioPorEmail(email);

//caso o usuario nao exista, retorna para a tela de login
if (usuario === undefined) {
   response.redirect('/');
   return;
}

console.log('senha digitada', password);
console.log('senha no banco', usuario.senha);

//verificar se a senha esta correta
if (md5(password)!== usuario.senha) {
   response.redirect('/');
   return;
}

console.log('Usuário autenticado com sucesso!');

console.log( usuario);
}

module.exports = {
   exibirPaginaLogin,
   autenticarUsuario
}