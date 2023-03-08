import React, {useState} from "react";
import axios from "axios"

export const Register = () => {
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [date, setDate] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const role = "64075efb9e44d62bd11f48bd"

    const postUser = () =>{
        axios
            .post("http://localhost:5000/user/register",{
                firstName,
                lastName,
                date,
                phoneNumber,
                email,
                password,
                role
            })
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })

    } 

  return (
    <div>
      <input type="text" placeholder="first Name" onChange={(e)=>{setFirstName(e.target.value)}}/>
      <br/>
      <input type="text" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}}/>
      <br/>
      <input type="date" placeholder="date of birth" onChange={(e)=>{setDate(e.target.value)}} />
      <br/>
      <input type="text" placeholder="phone number" onClick={(e)=>{setPhoneNumber(e.target.value)}} />
      <br/>
      <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} />
      <br/>
      <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} />
      <button onClick={(e)=>{postUser()}}>Register</button>
    </div>
  );
};
