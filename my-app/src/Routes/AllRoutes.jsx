import React from 'react'
import {Routes,Route} from "react-router-dom"
import Counter from '../Components/Counter'
import FireCalculator from '../Components/FireCalculator'
import Navbar from '../Components/Navbar'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        {/* <Route path="/counter" element={<Counter/>}/> */}


        
        <Route path="/fire" element={<FireCalculator/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
