
import { useState } from 'react'
import './App.css'
import {User} from "./Dumyydeta"
import Table from "./Table"

function App() {

  const [quryy ,setqueyy] = useState("");
  console.log(quryy);

  const Search = (deta) =>{
    return deta.filter((item) => item.firstname.toLowerCase().includes(quryy) || item.lastname.toLowerCase().includes(quryy) ||item.email.toLowerCase().includes(quryy) ||item.id.toLowerCase().includes(quryy))
  }


  return (
    <>
    <div className="contener">
    <input type="text" placeholder='Search...' className="search" onChange={(e) => setqueyy(e.target.value)}></input>
     
      
      
   <Table deta={Search(User)}/>

    </div>
    </>
  )
}

export default App
