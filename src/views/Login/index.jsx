import React, { useState } from 'react'
import './index.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Header from '../../componentes/Header'


const Login = () => {
  
  const [user, setUser]= useState("")

  const[senha, setSenha]= useState("")

  const navigate = useNavigate();

  function Submit (event) {
    event.preventDefault()
    if(user===""|senha===""){alert("Preencher os campos corretamente!")}
    else{navigate("/home")}
} 
  
  return (
    <section className='login'>
      <form className="login__form" onSubmit={(evento)=> Submit(evento)} >
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <h2>você pode entrar com o seu CPF</h2>
        <div className="login__input-wrapper">
          <label htmlFor="name">Digite seu CPF:</label>
          <input
            type="text"
            placeholder="Nome completo" 
            id="name"
            className="login__input-name"
            value={user} onChange={(evento)=> {setUser(evento.target.value)}} 
          />
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" placeholder="********" value={senha} onChange={(evento)=> {  console.log(senha)
            setSenha(evento.target.value)}}/>
        </div>
        <button type='submit'>
          Entrar
        </button>
      </form>
    </section>
  )
}
export default Login