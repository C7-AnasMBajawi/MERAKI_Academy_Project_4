import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./index.css" 
export const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='navbar'>
        <button className='rent' onClick={(e)=>{navigate("/register")}}>rent my car</button>
        <button className='rent1' onClick={(e)=>{navigate("/cars")}}>cars for rent</button>
        <input class="search-bar" type="text" />
    </div>
  )
}