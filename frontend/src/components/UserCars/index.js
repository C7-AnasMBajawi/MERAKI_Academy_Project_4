import axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.css";

export const UserCars = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [milage, setMilage] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [isAutomatic, setisAutomatic] = useState(false);
  const [type, setType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [rentPrice, setRentPrice] = useState("");
  const [weeklyRent, setWeeklyRent] = useState("")
  const [title, setTitle] = useState("");
  const [images, setImages] = useState("");



  const [carAd, setCarAd] = useState("");
  const getUserCars = () => {
    axios
      .get(`http://localhost:5000/car/user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setCarAd(res.data.cars);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCarById =(id) =>{
    axios
      .delete(`http://localhost:5000/car/${id}`)
      .then((res)=>{
        console.log(res);
        const carsAfterDelete = carAd.filter((deletedCar)=>{return deletedCar._id !== id})
        setCarAd(carsAfterDelete)
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  const updateCarById = (id)=>{
    axios.
    put(`http://localhost:5000/car/${id}` ,{
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
      weeklyRent,
      title,
      description,
      location,
      images
    }).then((res)=>{

    }).catch((res)=>{
      
    })
  }

  useEffect(() => {
    getUserCars();
  }, []);

  return (
    <div className="container">
      {carAd &&
        carAd.map((oneAd) => {
          return (
            <div className="user-card" key={oneAd._id}>
                <img className="image" src={oneAd.images[0]} />
                <div>
                  <h2>{oneAd.title}</h2>
                  <h3>{oneAd.rentPrice + " JOD"}</h3>
                  <p>{oneAd.description}</p>
                  <button>edit</button>
                  <button onClick={(e)=>{deleteCarById(oneAd._id)}}>delete</button>
                </div>
            </div>
          );
        })}
    </div>
  );
};
