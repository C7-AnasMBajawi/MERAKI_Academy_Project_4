const carModel = require("../models/car");

const createNewCarAd = (req, res) => {
  const {
    make,
    model,
    plateNumber,
    year,
    type,
    fuelType,
    isAutomatic,
    milage,
    color,
    rentPrice,
    title,
    description,
    location,
    images
  } = req.body;

  const newCar = new carModel({
    make,
    model,
    plateNumber,
    year,
    type,
    fuelType,
    isAutomatic,
    milage,
    color,
    rentPrice,
    title,
    description,
    location,
    images
  });

  newCar
    .save()
    .then((car) => {
      res.status(201).json({
        success: true,
        message: "car created",
        car: car,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        err: err,
      });
    });
};

const getAllrentAds = (req, res) => {
  carModel
    .find()
    .then((car) => {
      if (car.length != 0) {
        res.status(200).json({
          success: true,
          message: "all cars",
        });
      } else {
        res.status(200).json({
          success: false,
          message: "No cars",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        error: err,
      });
    });
};
const deleteCarById = (req, res) => {
  const id = req.params.id;
  carModel
    .findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(200).json({
          success: true,
          message: `car with id ${id} deletd successfully`,
        });
      } else {
        res.status(404).json({
          success: false,
          message: `car with id ${id} is not found`,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "server error",
        error: err,
      });
    });
};

const updateCarById = (res, req) => {
  const id = req.params.id;
  const {
    make,
    model,
    plateNumber,
    year,
    type,
    fuelType,
    isAutomatic,
    milage,
    color,
    rentPrice,
    title,
    description,
    location,
    images
  } = req.body;

  carModel
    .findByIdAndUpdate({ _id: id }, req.body, { new: true })
    .then((car) => {
      if (car) {
        res.status(202).json({
          success: true,
          message: `the car with id ${id} is updated`,
        });
      } else {
        res.status(404).json({
          success: false,
          message: `the car with id ${id} is not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "server error",
        error: err,
      });
    });
};


module.exports = {
  createNewCarAd,
  getAllrentAds,
  deleteCarById,
  updateCarById,
};
