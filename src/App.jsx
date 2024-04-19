
import './App.css'
import { useState } from 'react';

function App() {

  const [contador, setContador] = useState(0);


  function aumentar(){
    contador = contador + 1;
    console.log(contador);
  }
  

  return (
    <>
      <h1>Contador</h1>
      <p>{contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button>Dimunuir</button>
      <button>Zerar</button>
    </>
  )
}

export default App
