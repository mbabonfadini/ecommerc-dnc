import { Link, useLocation, useParams } from 'react-router-dom'
import styles from './index.module.scss'
import logo from './logo.svg'
import stroller from './stroller.svg'

export default function Header() {

    const parametros = useLocation()

    const pages = ["Novidades","jogos","Video Games", "Mesas Gamer","Promoções", "Atendimento"]

    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <img className={styles.header__top__logo} src={logo} alt="Logo DNC" />
                {parametros.pathname==='/'?"":<>
                <input type="text" placeholder='O que você está procurando?' />
                <img className={styles.header__top_carrinho} src={stroller} alt="Carrinho" />
                </>}
            </div>
            {parametros.pathname==='/'?"":
            <nav className={styles.header__bottom}>
                <ul>
                    {pages.map(page=>
                        <li key={page}>
                            <Link to='/home' >{page}</Link>
                        </li>)}
                </ul>
            </nav>}
        </header>
    )
}
