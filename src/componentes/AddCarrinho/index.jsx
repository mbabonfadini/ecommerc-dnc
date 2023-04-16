import { Link, useNavigate } from "react-router-dom";
import FormFinalizador from "../FormFinalizador";
import { useState } from "react";
import Modal from "../modal";

export default function AddCarrinho({ item }) {

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
                        <img src={item.imgPathDetail} alt={item.title} />
                    </div>
                </section>
                <section className="detalhe__produto--informacoes">
                    <p className="detalhe__produto--nome">Meu Carrinho</p>
                    <h3>{item.title}</h3>
                    <p className="detalhe__produto--linhaInferior"></p>
                    <div>
                        <p className="detalhe__produto--preco">{item.price}</p>
                        <p className="detalhe__produto--cor">Cor: {item.colors}</p>
                        <p
                            className="detalhe__produto--corBox"
                            style={{
                                backgroundColor: item.colors,
                            }}
                        ></p>
                    </div>
                    <div className="detalhe__produto--botao">
                        <Link to='/home' >Continuar comprando</Link>
                        <button onClick={() => setModal(!modal)}>
                            <img src="../../shopping-cart.png" alt="Carrinho de Compras" />
                            Finalizar compra
                        </button>
                    </div>
                </section>
            </section>
            {modal ? (
                <Modal>{<FormFinalizador onSubmit={()=>comprar()} />}</Modal>) : ("")}
        </>
    )
}
