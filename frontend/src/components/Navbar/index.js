import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
        <Link to = "/register"><button>rent my car</button></Link>
        <Link to="/cars"><button>vhiecles</button></Link>
    </div>
  )
}