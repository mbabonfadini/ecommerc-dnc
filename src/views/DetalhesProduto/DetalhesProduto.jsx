import React from "react";
import "./index.scss";
import Footer from "../../componentes/Footer/Footer";
import StoreHeader from "../../componentes/StoreHeader/StoreHeader";

const DetalhesProduto = () => {
  return (
    <>
      <div>
        <StoreHeader />
      </div>

      <section className="detalhe__produto">
        <section className="detalhe__produto--imgDescricao">
          <div className="detalhe__produto--img">
            <img src="../product-1.png" alt="Produto" />
          </div>
          <p className="detalhe__produto--nome">
            Microsoft Xbox Series X | Preto
          </p>
          <p className="detalhe__produto--descricao">Descrição</p>
          <p className="detalhe__produto--descricaoDetalhada">
            Apresentamos o Xbox Series X, nosso console mais rápido e poderoso
            de todos os tempos. Jogue milhares de títulos de quatro gerações de
            consoles- todos os jogos têm melhor aparência e são melhor
            executados no Xbox Series X.
          </p>
          <p className="detalhe__produto--linhaInferior"></p>
        </section>
        <section className="detalhe__produto--informacoes">
          <h3>Microsoft Xbox Series X | Preto</h3>
          <p className="detalhe__produto--linhaInferior"></p>
          <div>
            <p className="detalhe__produto--preco">R$ 2.000,00</p>
            <p className="detalhe__produto--cor">Cor: Preto</p>
          </div>
          <div className="detalhe__produto-botao">
            <button>
              <img src="../../shopping-cart.png" alt="Carrinho de Compras" />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default DetalhesProduto;
