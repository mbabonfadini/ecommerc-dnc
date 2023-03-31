import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import PaginaPadrao from "./views/Padrao";
import Produtos from "./views/Produtos";
import { PRODUCTS_MOCK } from "./mock/products.mock";
import DetalhesProduto from "./views/DetalhesProduto/DetalhesProduto";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Login />} />
          <Route path="home" element={<Home data={PRODUCTS_MOCK} />} />
          <Route path="/produto/:produtoId" element={<DetalhesProduto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
