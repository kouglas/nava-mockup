import { useState } from 'react'
import AddMember from './AddMember'
import './App.css'
import Info from './Info'
import Navbar from './Navbar'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Info />
      <AddMember/>
      
      
    </div>
  )
}

export default App
