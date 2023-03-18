import axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.css";

export const UserCars = () => {
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
