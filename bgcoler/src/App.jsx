import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 

function App() {
  const [color, setcolor]=useState("red");
  return (
    <>
       <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
             <button className='outline-none rounded-full px-4 py-1 text-white ' 
             style={{backgroundColor:'blue'}} onClick={()=>setcolor("blue")}>Blue</button>
              <button className='outline-none rounded-full px-4 py-1 text-white ' 
             style={{backgroundColor:'red'}} onClick={()=>setcolor("red")}>Red</button>
              <button className='outline-none rounded-full px-4 py-1 text-black ' 
             style={{backgroundColor:'Yellow'}} onClick={()=>setcolor("Yellow")}>Yellow</button>
              
          </div>

        </div>

       </div>
    </>
  )
}

export default App
