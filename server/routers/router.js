const { Router } = require("express")

const router = Router()

router.get("/", (req, res) => {
    res.json({
        test: "okay",
    })
})

module.exports = router
