import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import PaginaPadrao from "./views/Padrao";
import DetalhesProduto from "./views/DetalhesProduto/DetalhesProduto";
import { PRODUCTS_MOCK } from "./mock/products.mock";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Login />} />
                    <Route path="home" element={<Home data={PRODUCTS_MOCK} />} />
                    <Route path="produto/:produtoid" element={<DetalhesProduto data={PRODUCTS_MOCK}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}