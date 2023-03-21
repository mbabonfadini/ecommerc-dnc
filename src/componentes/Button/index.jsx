import styles from './index.module.scss'

export default function Button({ type = 'button', valor, onClick}) {
    return (
        <button className={styles.button} type={type} onClick={onClick?()=>onClick():false}>
            {valor}
        </button>
    )
}
