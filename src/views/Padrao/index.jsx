import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao() {
    return (
        <section>
            <div>Header</div>
            <Outlet />
            <div>footer</div>
        </section>
    )
}
