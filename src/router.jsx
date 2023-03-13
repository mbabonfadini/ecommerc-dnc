import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import PaginaPadrao from './views/Padrao';
import Produtos from './views/Produtos';
import { PRODUCTS_MOCK } from './mock/products.mock';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/home' element={<Home data={PRODUCTS_MOCK}/>} />
                <Route path="/" element={<Login />} />
                <Route path="/paginaPadrao" element={<PaginaPadrao />}>
                    
                    <Route path='produto/:produtoid' element={<Produtos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
