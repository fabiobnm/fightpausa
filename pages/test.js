import { useEffect, useState } from 'react'

import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [ accendi , setAccendi ] = useState(false)
  const [ nome , setNome ] = useState('luca')


  const testprova = ()=>{
    const numero = [1,2,3,'fabio'];
    numero.forEach(element => {
      setNome(element)
      setAccendi(true)
    });

  }

  useEffect(()=>{
    if(accendi && nome == 'fabio'){
      alert('ciao fabio')
    }else{
      console.log('non cambia');

    }
  })


  useEffect(()=>{
    alert('partito')
  },[])

  useEffect(()=>{
    console.log('è cambiato accedi');
    //alert('ciao')
  },[accendi,nome])

  return (
   <div>
    <h1 className='text-lg'>proiva</h1>
    <p>Ciao {nome}</p>
    {
      accendi ? <p style={{color:'green'}}>Acc</p> : <p  style={{color:'red'}}>No</p>
    }
    <button onClick={()=>setAccendi(!accendi)} className='text-bold'>premi</button>
    <br></br>
    <input onChange={(testo)=>setNome(testo.target.value)} style={{background:'red'}} type='text' ></input>
   <br></br>
    <input onChange={(testo)=>alert('yooo')} style={{background:'green'}} type='text' ></input>
    <br></br>
    <button onClick={()=>testprova()}>cambio</button>
   </div>
  )
}
