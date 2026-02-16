import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const Add = ()=>{
    if(counter == 20){
      return;
    }
    setCounter (counter +1)

  }

  const Remove = ()=>{
    if(counter == 0){
      return;
    }
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai or react</h1>
      <h3>Counter value {counter}</h3>
      <button onClick={Add}>Add Value {counter}</button>
      <br />
      <button onClick={Remove}>Remove Value {counter}</button>
      <br />
      
      <footer>footer {counter} </footer>
    </>
  )
}

export default App
