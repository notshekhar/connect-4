function AuthToken(req, res, next) {
    try {
        let { token } = req.headers
        console.log(token)
        if (!token) throw new Error("not auth")
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = {
    AuthToken,
}
