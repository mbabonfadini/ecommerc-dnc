import React from 'react'
import logo from '../../assets/logo.svg'
'./index.scss'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
                <img src={logo} alt="Logo DNC" />
                <p>Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas.<br></br>
                   <span>Para mais informações</span>,  entre em contato: (011) 1111-2222</p>
            </div>
    </div>
  )
}

export default Footer