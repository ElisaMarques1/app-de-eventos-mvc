function protegerRotaUsuario(req, res, next) {
    if (req.session.usuario) {
        next();
    } else {
        res.redirect('/');
    }
}

function protegerRotaAdmin(req, res, next) {
    if (req.session.usuario && req.session.usuario.cargo == "admin") {
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = {
    protegerRotaUsuario,
    protegerRotaAdmin
}