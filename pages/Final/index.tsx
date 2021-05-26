import Link from 'next/link'
import Style from './final.module.scss'
import Footer from '../Footer'

export default function Final(){
    return(
        <>
        <div className={Style.Final}>
            <div className={Style.FinalContainer}>
                <div className={Style.hero1}>
                    <p>Baixe o app e já Começe a ver os pets</p>
                    <Link href="/Info"><a>Baixar app</a></Link> 
                </div>
                <div className={Style.hero2}>
                    <img src="/img/celular 02.png" alt="Tela de escolha dos pets no app" />
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}