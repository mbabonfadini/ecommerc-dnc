import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import PaginaPadrao from "./views/Padrao";
import DetalhesProduto from "./views/DetalhesProduto";
import produtos from "./json/products.json"


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/" element={<PaginaPadrao />}>
                    <Route path="home" element={<Home data={produtos} />} />
                    <Route path="produto/:produtoid" element={<DetalhesProduto data={produtos} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}