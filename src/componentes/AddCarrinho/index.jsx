import { Link, useNavigate } from "react-router-dom";
import FormFinalizador from "../FormFinalizador";
import { useState } from "react";
import style from "./index.module.scss";
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
      <section className={style.detalhe__carinho}>
        <section className={style.detalhe__carinho__img}>
          <img src={item.imgPathDetail} alt={item.title} />
        </section>
        <section className={style.detalhe__carinho__informacoes}>
          <p className={style.detalhe__carinho__informacoes__nome}>
            Meu Carrinho
          </p>
          <h3>{item.title}</h3>
          <p className={style.detalhe__carinho__informacoes__linha}></p>
          <p className={style.detalhe__carinho__informacoes__preco}>
            {item.price}
          </p>
          <p className={style.detalhe__carinho__informacoes__cor}>
            Cor: {item.colorName}
          </p>
          <p
            className={style.detalhe__carinho__informacoes__corBox}
            style={{
              backgroundColor: item.colors,
            }}
          ></p>
          <section className={style.detalhe__carinho__botao}>
            <button className={style.detalhe__carinho__botao__continuar}>
              {" "}
              <Link to="/home">Continuar comprando</Link>
            </button>
            <button
              className={style.detalhe__carinho__botao__finalizar}
              onClick={() => setModal(!modal)}
            >
              Finalizar compra
            </button>
          </section>
        </section>
      </section>
      {modal ? (
        <Modal>{<FormFinalizador onSubmit={() => comprar()} />}</Modal>
      ) : (
        ""
      )}
    </>
  );
}
