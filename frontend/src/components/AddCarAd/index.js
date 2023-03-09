import React,{useState} from 'react'

export const AddCarAd = () => {
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [year, setYear] = useState("")
    const [milage, setMilage] = useState("")
    const [plateNumber, setPlateNumber] = useState("")
    const [isAutomatic, setisAutomatic] = useState(false)
    const [type, setType] = useState("")
    const [fuelType, setFuelType] = useState("")
    const [color, setColor] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [rentPrice, setRentPrice] = useState("")
    const [title, setTitle] = useState("")
  return (
    
    <div>AddCarAd</div>
  )
}
