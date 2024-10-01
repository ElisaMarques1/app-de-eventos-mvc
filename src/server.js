var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');

var enableHotReload = require("./hot-reload");

//importando controllers
var loginController = require("./controllers/loginController");
var cadastroController = require("./controllers/cadastroController");
var eventoController = require("./controllers/eventoController");
var autenticarMiddleware = require("./middlewares/autenticar");

const { adicionarEvento } = require("./models/eventoModel");



const app = express();

//Configuração do body parser
app.use(bodyParser.urlencoded({ extended: false }));


// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

//configuração do express-session
app.use(
  session({
    secret: "chave-super-secreta",
    resave: false,
    saveUninitialized: false,
  })
)

// Habilitar hot-reload
enableHotReload(app);

// Rotas

//rota para pagina inicial
app.get("/", loginController.exibirPaginaLogin);

//rota para autenticar usuario
app.post("/autenticar", loginController.autenticarUsuario);

//rota para rota de cadastro
app.get("/criar-conta", cadastroController.exibirPaginaLogin);

//rota para pagina de cadastro
app.post("/criar-conta", cadastroController.adicionarUsuario);

//rota para rota de eventos
app.get("/eventos", autenticarMiddleware.protegerRotaUsuario, eventoController.exibirPaginaEventos);

app.post("/criar-evento", autenticarMiddleware.protegerRotaAdmin, eventoController.adicionarEvento);

//rota para pagina de criar eventos
app.get("/criar-evento", autenticarMiddleware.protegerRotaAdmin, eventoController.exibirPaginaCriarEventos);


// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});