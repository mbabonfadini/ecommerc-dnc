import React from 'react'
import "./styles/footer.scss"
import logo from '../../assets/logo.svg'

export default function Footer() {
  return (
    <footer>
        <img src={logo} alt="Logo DNC em letras brancas" />
        <p>Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas. <b>Para mais informações</b>, entre em contato: (011) 1111-2222</p>
    </footer>
  )
}