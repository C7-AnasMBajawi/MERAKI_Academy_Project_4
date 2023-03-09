import React, { useContext, useState } from "react";
import { UserContext } from "../../App";

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTextArea
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export const AddCarAd = () => {
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
  const [title, setTitle] = useState("");
  const { isLoggedIn } = useContext(UserContext);

    const postAd = ()=>{
        
    }

  return (
    <>
      {isLoggedIn ? (
        <>
          <MDBContainer  className="p-3 my-5 d-flex flex-column w-50">
            <MDBInput
              wrapperClass="mb-4"
              label="make"
              id="form1"
              type="make"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="model"
              id="form1"
              type="make"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="year"
              id="form1"
              type="make"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="milage"
              id="form1"
              type="make"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="plateNumber"
              id="form1"
              type="make"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="isAutomatic"
              id="form1"
              type="make"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="type"
              id="form1"
              type="make"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="color"
              id="form1"
              type="make"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="fuel type"
              id="form1"
              type="make"
            />
            <MDBTextArea
              wrapperClass="mb-4"
              label="description"
              id="form1"
              type="make"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="rent price"
              id="form1"
              type="make"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="title"
              id="form1"
              type="make"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="location"
              id="form1"
              type="make"
            />
            <MDBBtn
          className="mb-4"
          
        >
          post ad
        </MDBBtn>
          </MDBContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
