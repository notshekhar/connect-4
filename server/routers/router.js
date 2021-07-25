const { Router } = require("express")

const { authHandler, loginHandler } = require("../JS/handlers")
const { AuthToken } = require("../JS/middleware")

const router = Router()

router.get("/", (req, res) => {
    res.json({
        test: "okay",
    })
})
router.get("/auth", AuthToken, authHandler)
router.get("/login", loginHandler)


module.exports = router
