function authHandler(req, res, next) {
    res.json({
        auth: true,
    })
}

module.exports = {
    authHandler,
}
