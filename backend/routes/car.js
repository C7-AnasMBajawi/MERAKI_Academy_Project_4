const express = require("express")

const carRouter = express.Router()

const {createNewCarAd} = require("../controllers/car")

carRouter.post("/car", createNewCarAd)

module.exports = carRouter