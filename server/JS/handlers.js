const { InsertUser, FindUser } = require("./db")

async function authHandler(req, res, next) {
    res.json({
        auth: true,
    })
}

async function loginHandler(req, res, next) {
    try {
        const { username, password } = req.body
        let f = FindUser(username, password)
        if (!f) throw new Error("User doesn't exist")
        res.json({ data: f, auth: true })
    } catch (err) {
        next(err)
    }
}
async function signupHandler(req, res, next) {
    try {
        const { username, password } = req.body
    } catch (err) {
        next(err)
    }
}
module.exports = {
    authHandler,
    loginHandler,
    signupHandler,
}