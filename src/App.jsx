
import './App.css'
import { useState } from 'react';

function App() {

  const [contador, setContador] = useState(0);


  function aumentar(){
    setContador(contador + 1)
  }
  
  function diminuir(){
    setContador(contador - 1)
  }

  function zerar(){
    setContador(0)
  }

  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(reponse => response.json())
  .then(data => console.log.log(data))

  return (
    <>
      <h1>Contador</h1>
      <p>{contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Dimunuir</button>
      <button onClick={zerar}>Zerar</button>
      
      
      
      <h1> Fotos</h1>


    </>

    
   
    
  )
}

export default App
