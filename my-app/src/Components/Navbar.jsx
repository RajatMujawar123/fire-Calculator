import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",color:"black"}}> 
      {/* <Link to="/counter"> <h1>Counter App</h1> </Link> */}
      <Link to="/fire"> <h1>FIRE Calculator</h1> </Link>
    </div>
  )
}

export default Navbar
