import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  useEffect(() => {
      getUserData();
  }, [])

  const [user, setUser] = useState({})
  const [endereco, setEndereco] = useState([])
  const [habilidades, setHabilidades] = useState([])
  const [projetos, setProjetos] = useState([])

  const getUserData = async() => {
    const response = await axios.get("https://avaliacao-bosch.onrender.com/usuario")
    
    setUser(response.data) // Sempre padrão
    setEndereco(response.data.endereco)
    setHabilidades(response.data.habilidades)
    setProjetos(response.data.projetos)

    console.log(response.data)    
  }
  
  return (
    <section className='bg-blue-400 flex w-screen h-screen justify-around items-center p-4'>
     
      {/* Main Info */}
      <section className='bg-amber-100/10 w-2/10 h-auto flex flex-col items-start gap-4 p-6 rounded-lg' key={user.id}>

        <img className='self-center w-50 h-64 rounded-lg' src="src/assets/jesse.png" alt="" />
        
        <span className='text-white text-4xl font-bold'>{user.nome}, {user.idade}</span>

        {/* Personal Details */}
        <section className='text-gray-200 text-lg  flex flex-col gap-0.5'>
          <span className='font-bold'>Endereço</span>
          <ul>
            <li>{endereco.cidade} - {endereco.estado} </li>
            <li>{endereco.rua}, {endereco.numero}</li> 
          </ul>
        </section>
        
        {/* Skills */}
        <section className='text-gray-200 text-lg flex flex-col gap-0.5'>
          <span className='font-bold'>Habilidades</span>
          <ul className='flex flex-wrap'>
          {
            habilidades.map(habilidade => <><li>{habilidade}ㅤ•ㅤ</li></>)
          }
          </ul>
        </section>

      </section>

      {/* Portfolio */}
      <section className='bg-amber-100/10 w-7/10 h-auto p-6 flex flex-row flex-wrap justify-around items-center gap-8 rounded-lg'>
        {
          projetos.map(projeto => <>
            <div key={projeto.id} className='bg-gray-100/90 w-100 h-70 p-5 rounded-lg flex flex-col'>
              <br></br>
              <span className='font-bold text-gray-700 text-2xl'>{projeto.nome}</span>
              <span  >{projeto.status}</span>
            </div>
          </>)
        }

        {/* DUPLICADO PARA MELHOR VISUALIZAÇÃO! */}
        {
          projetos.map(projeto => <>
            <div key={projeto.id} className='bg-gray-100/90 w-100 h-70 p-5 rounded-lg flex flex-col'>
              <br></br>
              <span className='font-bold text-gray-700 text-2xl'>{projeto.nome}</span>
              <span  >{projeto.status}</span>
            </div>
          </>)
        }
        
      </section>
    </section>
  )
}

export default App
