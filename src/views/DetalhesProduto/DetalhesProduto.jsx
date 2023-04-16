import React, { useState, useEffect } from "react";
import "./index.scss";
import Modal from "../../componentes/modal";
import FormFinalizador from "../../componentes/FormFinalizador";
import { useNavigate, useParams } from "react-router";
import { PRODUCTS_MOCK } from "../../mock/products.mock";
import AddCarrinho from "../../componentes/AddCarrinho";

const detalhesProduto = () => {
  const { produtoid } = useParams();
  const produto = PRODUCTS_MOCK.find((product) => product.id == produtoid);

  const [modal, setModal] = useState(false);
  const navegar = useNavigate();



  function comprar() {
    setModal(!modal);
    navegar("/home");
  }

  return (
    <>
      <section className="detalhe__produto">
        <section className="detalhe__produto--imgDescricao">
          <div className="detalhe__produto--img">
            <img src={produto.imgPathDetail} alt={produto.title} />
          </div>

          <p className="detalhe__produto--nome">{produto.title}</p>

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
            <p className="detalhe__produto--preco">{produto.price}</p>
            <p className="detalhe__produto--cor">Cor: {produto.colors}</p>
            <p
              className="detalhe__produto--corBox"
              style={{
                backgroundColor: produto.colors,
              }}
            ></p>
          </div>
          <div className="detalhe__produto--botao">
            <button onClick={() => setModal(!modal)}>
              {/* <Link to={`/produto/${produto.id}`}></Link> */}
              <img src="../../shopping-cart.png" alt="Carrinho de Compras" />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </section>
      {modal ? (
        <Modal>{<AddCarrinho item={produto}/>}</Modal>) : ("")}
    </>
  );
};

export default detalhesProduto;
