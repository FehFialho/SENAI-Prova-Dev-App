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

  const title = "<Div>as Bosch"

  return (
    <>
      {/* <Card></Card> Ia fazer em Props mas desisti (aff)*/}
      <nav className='w-full h-14 bg-red-800/90 font-bold text-white text-2xl flex justify-center items-center'>{title}</nav>
      
      <section className='m-10 p-2 flex flex-row flex-wrap w-9/10 justify-around'>
        {
          // divas.map(user => <><br></br><span>{user.name}</span></>)
          divas.map(divas => (

            <div className='m-2 h-80 w-100 flex flex-col rounded-lg shadow-xl/30' key={divas.id}>
              
              {/* Image */}
              <section>
                {/* <div className='w-full h-auto bg-amber-200'></div> */}
                <img className='w-full h-65 rounded-t-lg ' src={divas.imagem} alt="Personagem Favorito"/>
                {/* <div className='w-full h-auto bg-amber-200'></div> */}
              </section>
              
              {/* Data */}
              <section className='flex flex-row w-full h-full gap-2 items-center justify-center'>
                
                <span className='text-gray-600'>{divas.id} - {divas.nome} {divas.sobrenome} </span>

                {/* Conditional Formatting! */}
                {
                  divas.apelido &&
                  <span className='text-gray-600'>( {divas.apelido} )</span>             
                }

                {
                  divas.status == 'Matriculado' &&
                  <div className='bg-green-400 rounded-full w-5 h-5 ml-2'></div>                
                }

                {
                  divas.status != 'Matriculado' &&
                  <div className='bg-red-400 rounded-full w-6 h-6'></div>                
                }
                
              </section>

            </div>
          ))
        }
      </section>
    </>
  )
}

export default App
