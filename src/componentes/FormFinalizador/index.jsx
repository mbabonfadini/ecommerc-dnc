import Button from "../Button";
import Input from "../Input";
import styles from "./index.module.scss";

export default function FormFinalizador({ onSubmit }) {
  return (   
       
      <form className={styles.form} name="form" onSubmit={onSubmit}>
        <p className="form__titulo">Finalizar Compra</p>
        <Input label="Digite seu nome" placeholder="Nome completo" />
        <Input label="Digite seu CPF" placeholder="xxx.xxx.xxx-xx" />
        <Input label="Digite seu Endereço" placeholder="Endereço" />
        <Input
          label="Forma de Pagamento"
          placeholder="Forma de Pagamento"
          type="password"
        />
        <Button valor="Confirmar Pedido" type="submit" />
      </form>
  );
}
