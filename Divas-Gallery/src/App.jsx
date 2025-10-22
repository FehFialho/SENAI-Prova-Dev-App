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
      
      <section className='bg-teal-400 m-10 p-2 flex flex-row flex-wrap w-9/10 justify-around'>
        {
          // divas.map(user => <><br></br><span>{user.name}</span></>)
          divas.map(divas => (

            <div className='bg-teal-100 m-2 h-80 w-100 flex flex-col rounded-2xl' key={divas.id}>
              
              <img className='w-full h-65 rounded-t-2xl ' src={divas.imagem} alt="Personagem Favorito"/>
              
              {/* Data */}
              <section className='flex flex-row w-full h-full gap-2 items-center justify-center'>
                
                <span>{divas.id} - {divas.nome} {divas.sobrenome} </span>

                {/* Conditional Formatting! */}
                {
                  divas.apelido &&
                  <span>( {divas.apelido} )</span>             
                }
                {
                  divas.status == 'Matriculado' &&
                  <div className='bg-green-400 rounded-full w-6 h-6'></div>                
                }
                
              </section>

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
