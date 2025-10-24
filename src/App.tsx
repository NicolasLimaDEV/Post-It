import { useState } from 'react'
import './App.css';
import CardPost from './components/CardPost/CardPost';

export interface PostProps {
  nome: string,
  mensagem: string
}

export default function App(){
  const [inputNome, setInputNome] = useState('')
  const [inputMensagem, setInputMensagem] = useState('')
  const [posts, setPosts] = useState<PostProps[]>([])

  function handleAdd(){
    setPosts([...posts, {nome: inputNome, mensagem: inputMensagem}])

    setInputNome('')
    setInputMensagem('')
  }

  return(
    <main className='main-container'>
      <h1 className='title-main'>Post-it</h1>

        <div className='container-form'>
         <input 
            className='input-nome'
            type="text"
            placeholder='Nome do post-it'
            value={inputNome}
            onChange={(e)=> setInputNome(e.target.value)}
            required
         />

         <input
            className='input-mensagem' 
            type="text"
            placeholder='Mensagem'
            value={inputMensagem}
            onChange={(e)=> setInputMensagem(e.target.value)}
            required
         />

         <button onClick={handleAdd} className='btn-criar'>Criar</button>
      </div>

      <section className='post-container'>
        {posts.map((post, index) => (
          <CardPost key={index} nome={post.nome} mensagem={post.mensagem} />
        ))}
      </section>
    </main>
  )
}