import styles from './index.module.scss'

export default function Input({ type = 'text', value, placeholder, label }) {
    return (
        <div className={styles.input}>
            <label > {label} </label>
            <input  type={type} value={value} placeholder={placeholder} />
        </div>
    )
}
