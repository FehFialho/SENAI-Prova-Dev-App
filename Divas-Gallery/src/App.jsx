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
      {/* <Card></Card> */}
      
      <section className='bg-red-600 m-10 p-2'>
        {
          // divas.map(user => <><br></br><span>{user.name}</span></>)
          
          

          divas.map(divas => (

            <div className='bg-red-400 m-2 h-60 w-60' key={divas.id}>
              <span>{divas.id} - {divas.nome} {divas.sobrenome} </span>
              <div></div>
              <img className='w-50 max-h-50' src={divas.imagem} alt="" />
            </div>

            // <li style={{ listStyle: "none", cursor:'pointer' }} key={divas.id}>
            // {divas.id} - {divas.nome}
            // </li>
          ))
        }
      </section>
    </>
  )
}

export default App
