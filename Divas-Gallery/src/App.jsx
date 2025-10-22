import { useEffect, useState } from 'react';
import './App.css'
import { Card } from './components/Card'
import axios from 'axios'

function App() {

  //https://avaliacao-bosch.onrender.com/all

  useEffect(() => {
      getDivasData();
  }, [])

  const [divas, setDivas] = useState([])

  const getDivasData = async() => {
  const response = await axios.get("https://avaliacao-bosch.onrender.com/all")
  setDivas(response.data)
  console.log(response.data)
  }

  return (
    <>
      <Card></Card>
      
      {
        // divas.map(user => <><br></br><span>{user.name}</span></>)
        
        divas.map(divas => (

          // <div></div>

          <li style={{ listStyle: "none", cursor:'pointer' }} key={divas.id}>
          {divas.id} - {divas.nome}
          </li>
        ))
      }
    </>
  )
}

export default App
