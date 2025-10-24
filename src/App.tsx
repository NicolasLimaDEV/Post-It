import './App.css';
import CardPost from './components/CardPost/CardPost';
import Formulario from './components/Form/Formulario';

export default function App(){
  return(
    <main className='main-container'>
      <h1 className='title-main'>Post-it</h1>

      <Formulario />

      <section className='post-container'>
        <CardPost />
      </section>
    </main>
  )
}