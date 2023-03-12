import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../componentes/Header'

export default function PaginaPadrao() {
    return (
        <section>
            <Header/>
            <Outlet />
            <div>footer</div>
        </section>
    )
}
