import Link from 'next/link'
import Style from './top.module.scss'
import NavBar from '../NavBar'

export default function Top() {
    return (
        <>
        <div className={Style.home}>
            <NavBar />
            <div className={Style.homeContainer}>
                <div className={Style.hero1}>
                    <p>O melhor app de adoção</p>
                    <p>Baixe já o app em seu Android ou IOS</p>
                    <Link href="/Info"><a>Baixar app</a></Link> 
                </div>
                <div className={Style.hero2}>
                    <img src="/img/celular 01.png" alt="Tela Inicial do App" />
                </div>
            </div>
        </div>
        </>
    )
}