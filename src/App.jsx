
import './App.css'
import { useState, useEffect } from 'react';

function App() {

  const [contador, setContador] = useState(0);
  const [photos , setPhotos] = useState([])


  function aumentar(){
    setContador(contador + 1)
  }
  
  function diminuir(){
    setContador(contador - 1)
  }

  function zerar(){
    setContador(0)
  }

  useEffect(()=>{

   
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(reponse => response.json())
  .then(data => setPhotos(data))

  },[])


  return (
    <>
      <h1>Contador</h1>
      <p>{contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Dimunuir</button>
      <button onClick={zerar}>Zerar</button>
      
      
      
      <h1> Fotos</h1>
      {photos.map((elment)=>(

        <img key={element.id} src={element.url} alt={element.title} width={100} />


))}
</>

  )
}

export default App
