import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import lupa from "./lupa.svg";
import stroller from "./stroller.svg";

const StoreHeader = () => {
  return (
    <div className="container">
      <div className="header__superior">
        <Link to={"/home"}>
          <img className="logo" src={logo} alt="Logo DNC" />
        </Link>
        <img className="lupa" src={lupa} alt="Lupa de busca" />
        <input type="text" placeholder="O que você está procurando?" />

        <button>
          <Link to={``}>
            <img
              className="carrinho"
              src={stroller}
              alt="Carrinho de compras"
            />
          </Link>
        </button>
      </div>
      <div className="header__inferior">
        <h3 className="font__bold">Novidades</h3>
        <h3>Jogos</h3>
        <h3>Video Games</h3>
        <h3>Mesas Gamer</h3>
        <h3>Promoções</h3>
        <h3>Atendimento</h3>
      </div>
    </div>
  );
};
export default StoreHeader;
