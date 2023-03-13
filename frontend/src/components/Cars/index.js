import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./index.css"


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
    <div class="container">
        {carAds && carAds.map((oneAd)=>{
            return <div class="car" key={oneAd._id}>
                <p>{oneAd.make}</p>
            </div>
        })}
    </div>
  )
}
