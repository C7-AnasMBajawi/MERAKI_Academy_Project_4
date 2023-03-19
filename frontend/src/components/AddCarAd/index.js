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
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [weeklyRent, setWeeklyRent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const { isLoggedIn } = useContext(UserContext);
  const [images, setImages] = useState("");
  const [index, setIndex] = useState(0);
  const arr = [
    {make : "Select your car make", model :["Select your car model"]},
    {
      make: "Mercedes",
      model: [
        "A250",
        "C200",
        "C300",
        "CLA 250",
        "CLA 45",
        "CLS 350",
        "CLS 450",
        "CLS 53",
        "E200",
        "E300",
        "G 500",
        "G 63",
        "GLA 200",
        "GLA 300",
        "S 320",
        "S 450",
        "S 500",
      ],
    },
    { make: "BMW", model: ["530e", "330e", "iX3", "i8", "X4", "X5"] },
    {
      make: "Toyota",
      model: [
        "camary",
        "corolla",
        "avalon",
        "yaris",
        "land crusier",
        "fortuner",
      ],
    },
    {
      make: "KIA",
      model: [
        "K3",
        "K5",
        "K8",
        "Forte",
        "Rio",
        "Sorento",
        "Niro",
        "Picanto",
        "Sedona",
        "Sportage",
        "Soul",
        "Stinger",
      ],
    },
    {
      make: "Honda",
      model: ["Accord", "Civic", "CR-V", "MR-V", "Odyssey", "Pilot"],
    },
    {
      make: "lexsus",
      model: [
        "ES",
        "GS",
        "GX",
        "IS",
        "LX",
        "RC",
        "RX",
        "RCF",
        "LS",
        "NX",
        "CT",
      ],
    },
  ];

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

  const successfullyNotify = ()=>{
    toast.success('succussfly posted', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const errorNotify =() =>{
    toast.error('missing required field', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

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
          weeklyRent,
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
        successfullyNotify()
      })
      .catch((err) => {
        errorNotify()
      });
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <select
              className="mb-4 btn1 bg-primary text-white"
              placeholder="select your car "
              onChange={(e) => {
                setMake(arr[e.target.value].make);
                console.log(make);
                setIndex(e.target.value);
              }}
            >
              {arr.map((oneMake, i) => {
                return (
                  <option key={i} value={i}>
                    {oneMake.make}
                  </option>
                );
              })}
            </select>

            <select
              className="mb-4 btn2 bg-primary text-white"
              placeholder="select your car "
              onChange={(e) => {
                setModel(e.target.value);
              }}
            >
              {arr[index].model.map((modelsOfOneMake, i) => {
                return (
                  <option className="opt" key={i}>
                    {modelsOfOneMake}
                  </option>
                );
              })}
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
              label="Automatic"
              id="form1"
              onChange={(e) => {
                setisAutomatic(!isAutomatic);
                console.log(isAutomatic);
              }}
            />
            <select
              className="mb-4 btn2 bg-primary text-white"
              placeholder="select your car "
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option className="opt" value={undefined}>select your car type</option>
              <option className="opt">Luxary</option>
              <option className="opt">Sedan</option>
              <option className="opt">SUV</option>
            </select>

            <select
              className="mb-4 btn2 bg-primary text-white"
              placeholder="select your car "
              onChange={(e) => {
                setFuelType(e.target.value);
              }}
            >
              <option className="opt">select your car fuel type</option>
              <option className="opt" value={"Hybrid"}>
                Hybrid
              </option>
              <option className="opt" value={"Electric"}>
                Electric
              </option>
              <option className="opt" value={"Gas"}>
                Gas
              </option>
            </select>

            <MDBInput
              wrapperClass="mb-4"
              label="color"
              id="form1"
              type="make"
              onChange={(e) => {
                setColor(e.target.value);
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
              label="weekly rent price"
              id="form1"
              type="make"
              onChange={(e) => {
                setWeeklyRent(e.target.value);
              }}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="daily rent price"
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
            <select
              className="mb-4 btn2 bg-primary text-white"
              placeholder="select your car "
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            >
              <option className="opt" value={""}>
                City 
              </option>
              <option className="opt" value={"Amman"}>
                Amman
              </option>
              <option className="opt" value={"Irbid"}>
                Irbid
              </option>
              <option className="opt" value={"Aqaba"}>
                Aqaba
              </option>
            </select>
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
            <ToastContainer />
          </MDBContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
