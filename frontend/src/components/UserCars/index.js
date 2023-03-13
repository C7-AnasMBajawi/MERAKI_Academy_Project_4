import axios from 'axios'
import React, {useState, useEffect} from 'react'

export const UserCars = () => {
    const [carAd, setCarAd] = useState("")
    const getUserCars = (id) =>{
        axios
            .get(`http://localhost:5000/car/${id}`)
            .then((res)=>{
                setCarAd(res.data.cars)
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    useEffect(() => {
        getUserCars(id)
    }, [])
    
  return (
    <div>
        {carAd && carAd.map((oneAd)=>{
            return <div>
                <img src={oneAd.images[0]}/>
                <p></p>
            </div>
        })}
    </div>
  )
}
