import React from 'react'
import logo from "./images/logo.png"

const Navbar = () => {
  return (
    <div className="fixed w-screen px-36 flex py-4 items-center justify-between backdrop-blur-lg">
        <div className="">
            <img src={logo} alt="" className='w-24 h-24'/>
        </div>
        <div className="flex space-x-6">
            <h1>About Us</h1>
            <h1>Destinations</h1>
            <h1>Tours</h1>
            <h1>Blog</h1>
        </div>
    </div>
  )
}

export default Navbar