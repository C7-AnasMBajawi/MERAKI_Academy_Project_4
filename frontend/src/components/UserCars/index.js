import axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.css" 

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
  useEffect(() => {
    getUserCars();
  }, []);

  return (
    <div>
      {carAd &&
        carAd.map((oneAd) => {
          return (
            <div>
              <img className="image" src={oneAd.images[0]} />
              <p></p>
            </div>
          );
        })}
    </div>
  );
};
