import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-amber-600 p-5 rounded-2xl text-3xl mb-4  '>Tailwind Css</h1>
    <div className='flex'>
    <Cards Username = "Akash" imglink={"https://media.istockphoto.com/id/1500645450/photo/motion-blurred-image-of-traffic-in-the-highway.jpg?s=2048x2048&w=is&k=20&c=UID_Zf5D03ydfBPPFR7H_vg_tpA99TsjOIlbeCmtesY="}  AboutImg={"This image using for fun"} photography = {"#photography"} travel = {"#travel"} winter = {"#winter"}/>
    <Cards Username={"Nitin"} imglink={"https://media.istockphoto.com/id/466819864/photo/city-traffic.jpg?s=612x612&w=0&k=20&c=krgKIhj4eQiISgutz7Us5ARSmWs-qtvPHnESAsz8HQ8="} AboutImg={"thisn"} photography={"#mast"} travel={"**travel"} winter={"winter"}/>
    <Cards/>
    <Cards/>
   </div>
    </>
  )
}

export default App
