const express = require("express");

const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")

const carRouter = express.Router();

const {
  createNewCarAd,
  getAllrentAds,
  deleteCarById,
  updateCarById,
  getRentAdByUser,
  sendUserPostAdApprove
} = require("../controllers/car");

carRouter.post("/", authentication, authorization("CREATE"), createNewCarAd);
carRouter.get("/", getAllrentAds);
carRouter.delete("/:id", deleteCarById);
carRouter.put("/:id", updateCarById);
carRouter.get("/user",authentication ,getRentAdByUser)
carRouter.post("/approve/sms", sendUserPostAdApprove)

module.exports = carRouter;
