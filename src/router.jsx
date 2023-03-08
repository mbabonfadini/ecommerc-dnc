import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import PaginaPadrao from './views/Padrao';
import Produtos from './views/Produtos';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/" element={<PaginaPadrao />}>
                    <Route path='home' element={<Home />} />
                    <Route path='produto/:produtoid' element={<Produtos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
