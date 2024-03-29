import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./index.css"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  

export const Cars = () => {

const [carAds, setCarAds] = useState([])
    const getAllrentAds = () => {
        axios
            .get("http://localhost:5000/car/")
            .then((res)=>{
                setCarAds(res.data.cars)
                console.log(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    
    useEffect(() => {
        getAllrentAds()
    }, [])
    
  return (
    <div class="container1">
        {carAds && carAds.map((oneAd)=>{
            console.log(oneAd.images[0]);
            return <MDBCard className='car'>
            <MDBCardImage   src={oneAd.images[0]} position='top' alt='...' />
            <MDBCardBody >
              <MDBCardTitle >{oneAd.title}</MDBCardTitle>
              <MDBCardText className='mb-0'>
                {oneAd.rentPrice + " JOD"}
              </MDBCardText>
              <MDBCardText className='mb-0'>
                {oneAd.location }
              </MDBCardText>
              <MDBBtn href='#'>view</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        })}
    </div>
  )
}
