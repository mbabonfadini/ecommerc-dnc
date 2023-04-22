import styles from "./index.module.scss";

export default function Modal({ children }) {
  return (
    <div className={styles.modal}>
      <div>{children}</div>
    </div>
  );
}
