import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../componentes/Footer/Footer'
import Header from '../../componentes/Header'

export default function PaginaPadrao() {
    return (
        <section>
            <Header/>
            <Outlet />
            <Footer/>
        </section>
    )
}
