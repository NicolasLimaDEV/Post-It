import './Formulario.css'
import { useState } from 'react'

export default function Formulario(){
   const [inputNome, setInputNome] = useState('')
   const [inputMensagem, setInputMensagem] = useState('')

   return(
      <div className='container-form'>
         <input 
            className='input-nome'
            type="text"
            placeholder='Nome do post-it'
            value={inputNome}
            onChange={(e)=> setInputNome(e.target.value)}
         />

         <input
            className='input-mensagem' 
            type="text"
            placeholder='Mensagem'
            value={inputMensagem}
            onChange={(e)=> setInputMensagem(e.target.value)}
         />

         <button className='btn-criar'>Criar</button>
      </div>
   )
}