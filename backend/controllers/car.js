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
  })

  newCar
    .save()
    .then((car)=>{
        res.status(201).json({
            success : true,
            message : "car created",
            car : car
        })
    })
    .catch((err)=>{
        res.status(500).json({
            success : false,
            message : "server error",
            err: err
        })
    })
};

module.exports ={createNewCarAd}
