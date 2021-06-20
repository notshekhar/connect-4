const express = require("express")
const cors = require("cors")

const logger = require("morgan")

const { errorHandler } = require("./error")
const router = require("./routers/router1")


const app = express()


app.use(cors(), express.json({ limit: "1mb" }), logger("dev"))

app.use("/", router)

app.use(errorHandler)
module.exports = app
