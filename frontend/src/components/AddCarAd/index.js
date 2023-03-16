import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import axios from "axios";

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTextArea,
  MDBFile,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./index.css";

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
  const [image, setImage] = useState("");
  const { isLoggedIn } = useContext(UserContext);
  const [images, setImages] = useState("");
  const arr =[{make : "Mercedes" , model:"C200"}, {make : "BMW" , model : "530e"}, {make : "Mercedes", model : "E200"}, {make : "Toyota", model : "camary"}, {make : "Toyota", model : "corolla"}, {make : "Toyota", model : "avalon"},{make : "Toyota", model : "yaris"},{make : "Toyota", model : "land crusier"}, {make : "Toyota", model : "fortuner"}, {make : "Mercedes" , model:"CLA 45"}, {make : "BMW" , model : "330e"}, {make : "BMW" , model : "X4"}, {make : "BMW" , model : "X5"}, {make : "BMW" , model : "iX3"}, {make : "BMW" , model : "i8"},{make : "KIA" , model : "K3"}, {make : "KIA" , model : "K5"}, {make : "KIA" , model : "sporatage"}, {make : "KIA" , model : "sporatage"},
  {make : "Honda" , model : "civic"}, {make : "Honda" , model : "accord"}, {make : "Honda" , model : "CR-V"}, {make : "Honda" , model : "MR-V"}]


  const uplaodImage = () => {
    const uploadedImage = new FormData();
    uploadedImage.append("file", image);
    uploadedImage.append("upload_preset", "birrygma");

    axios
      .post("https://api.cloudinary.com/v1_1/dre4mdodo/upload", uploadedImage)
      .then((res) => {
        console.log(res);
        setImages(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendApprovePostMessage = () => {
    axios
      .post("http://localhost:5000/car/approve/sms", {
        make,
        model,
        plateNumber,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postAd = () => {
    axios
      .post(
        "http://localhost:5000/car/",
        {
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
          images,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        sendApprovePostMessage();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

            <select className="mb-4 btn1 bg-primary text-white" placeholder="select your car ">
              {arr.map((oneMake)=>{
                return <option onChange={(e)=>{setMake(e.target.value)}}>{oneMake.make}</option>
              })}
            </select>

            <select className="mb-4 btn2 bg-primary text-white" placeholder="select your car ">
              {/* {arr.filter((models)=>{
                return <option>{models.model}</option>
              })} */}
            </select>
            <MDBInput
              wrapperClass="mb-4"
              label="year"
              id="form1"
              type="make"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="milage"
              id="form1"
              type="make"
              onChange={(e) => {
                setMilage(e.target.value);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="plateNumber"
              id="form1"
              type="make"
              onChange={(e) => {
                setPlateNumber(e.target.value);
              }}
            />
            <MDBCheckbox
              wrapperClass="mb-4"
              label="isAutomatic"
              id="form1"
              onChange={(e) => {
                setisAutomatic(!isAutomatic);
                console.log(isAutomatic);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="type"
              id="form1"
              type="make"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="color"
              id="form1"
              type="make"
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="fuel type"
              id="form1"
              type="make"
              onChange={(e) => {
                setFuelType(e.target.value);
              }}
            />
            <MDBTextArea
              wrapperClass="mb-4"
              label="description"
              id="form1"
              type="make"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="rent price"
              id="form1"
              type="make"
              onChange={(e) => {
                setRentPrice(e.target.value);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="title"
              id="form1"
              type="make"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="location"
              id="form1"
              type="make"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <MDBFile
              wrapperClass="mb-4"
              size="lg"
              id="form1"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <br />
            <MDBBtn
              wrapperClass="mb-4 mt-4"
              onClick={(e) => {
                uplaodImage();
              }}
            >
              upload
            </MDBBtn>
            <br />
            <MDBBtn
              wrapperClass="mb-4 mt-4"
              onClick={(e) => {
                postAd();
              }}
            >
              post ad
            </MDBBtn>

            <MDBDropdown responsive="lg-end">
              <MDBDropdownToggle className="btn1 mb-4">
                Dropdown button
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>Action</MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
