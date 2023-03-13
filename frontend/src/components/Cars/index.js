import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Cars = () => {
    const [title, setTitle] = useState("")
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [location, setLocation] = useState("")
    const [year, setYear] = useState("")
    const [plateNumber, setPlateNumber] = useState("")
    const [type, setType] = useState("")
    const [fuelType, setFuelType] = useState("")
    const [isAutomatic, setIsAutomatic] = useState("")
    const [image, setImage] = useState("")
    const [color, setColor] = useState("")
    const [description, setDescription] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [milage, setMilage] = useState("")
    const [rentPrice, setrentPrice] = useState("")

    const getAllrentAds = () => {
        axios
            .get("http://localhost:5000/car/")
            .then((res)=>{
                setMake(res.data.make)
                setModel(res.data.model)
                setMilage(res.data.milage)
                setPlateNumber(res.data.plateNumber)
                setPhoneNumber(res.data.phoneNumber)
                setDescription(res.data.description)
                setIsAutomatic(res.data.isAutomatic)
                setColor(res.data.color)
                setImage(res.data.image[0])
                setFuelType(res.data.fuelType)
                setType(res.data.type)
                setrentPrice(res.data.rentPrice)
                setYear(res.data.year)
                setTitle(res.data.title)
                setLocation(res.data.location)
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    
    useEffect(() => {
        getAllrentAds()
    }, [])
    
  return (
    <div>

    </div>
  )
}
