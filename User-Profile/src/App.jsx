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

  const getUserData = async() => {
    const response = await axios.get("https://avaliacao-bosch.onrender.com/usuario")
    
    setUser(response.data) // Sempre padrão
    setEndereco(response.data.endereco)
    setHabilidades(response.data.habilidades)

    console.log(response.data)    
  }
  
  return (
    <section className='bg-blue-400 flex w-screen h-screen justify-around items-center'>
      {/* Main Info */}
      <section className='bg-amber-300 w-70 h-70' key={user.id}>

        <span>{user.nome}, {user.idade}</span>
        {/* Personal Details */}

        <section>
          <span>Endereço:</span>
          <ul>
            <li>{endereco.cidade} - {endereco.estado} </li>
            <li>{endereco.rua}, {endereco.numero}</li> 
          </ul>
        </section>
        
        <section>
        {/* Skills */}
          <span>Habilidades:</span>
          <ul>
          {
            habilidades.map(habilidade => <><li>{habilidade} •</li></>)
          }
          </ul>
        </section>

        </section>

      {/* Portfolio */}
      <section className='bg-amber-500'>
      {
        user.projetos.map(projeto => <>
          <div key={projeto.id}>
            <span >{projeto.nome}</span>
            <br></br>
            <span  >{projeto.status}</span>
          </div>
        </>)
      }
      </section>
    </section>
  )
}

export default App
