const express = require("express");

const carRouter = express.Router();

const {
  createNewCarAd,
  getAllrentAds,
  deleteCarById,
  updateCarById,
} = require("../controllers/car");

carRouter.post("/", createNewCarAd);
carRouter.get("/", getAllrentAds);
carRouter.delete("/:id", deleteCarById);
carRouter.put("/:id", updateCarById);

module.exports = carRouter;
