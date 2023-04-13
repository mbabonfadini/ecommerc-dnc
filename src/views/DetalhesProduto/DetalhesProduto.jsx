import React, { useEffect, useState } from "react";
import "./index.scss";
import Modal from "../../componentes/modal";
import FormFinalizador from "../../componentes/FormFinalizador";
import { useNavigate, useParams } from "react-router";
import PRODUCTS_MOCK from "../../mock/products.mock";

const DetalhesProduto = () => {
  const params = useParams()
  const [produto,setProduto]= useState({})
  const [modal, setModal] = useState(false)

  const navegar = useNavigate()

  useEffect(()=>{
    setProduto(PRODUCTS_MOCK.filter(p=>p.id === params.id))
    console.log(produto)
  },[produto])
  


  function comprar() {
    setModal(!modal)
    navegar("/home")
  }

  return (
    <>
      <section className="detalhe__produto">
        <section className="detalhe__produto--imgDescricao">
          <div className="detalhe__produto--img">
            <img src="../product-1.png" alt="Produto" />
          </div>
          <p className="detalhe__produto--nome">
            {produto.title}
          </p>
          <p className="detalhe__produto--descricao">Descrição</p>
          <p className="detalhe__produto--descricaoDetalhada">
            {produto.description}
          </p>
          <p className="detalhe__produto--linhaInferior"></p>
        </section>
        <section className="detalhe__produto--informacoes">
          <h3>{produto.title}</h3>
          <p className="detalhe__produto--linhaInferior"></p>
          <div>
            <p className="detalhe__produto--preco">R$ 2.000,00</p>
            <p className="detalhe__produto--cor">Cor: Preto</p>
            <p className="detalhe__produto--corBox"></p>
          </div>
          <div className="detalhe__produto--botao">
            <button onClick={() => setModal(!modal)}>
              <img src="../../shopping-cart.png" alt="Carrinho de Compras" />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </section>
      {modal ? <Modal><FormFinalizador onSubmit={() => comprar()} /></Modal> : ""}

    </>
  );
};

export default DetalhesProduto;
