import Link from 'next/link'
import Style from './info.module.scss'
import NavBar from '../NavBar'
import Footer from '../Footer'

export default function Info(){
    return(
        <>
        <div className={Style.Info}>
            <NavBar />
            <div className={Style.InfoContainer}>
                <div className={Style.hero1}>
                    <p>Nosso app ainda não foi lançado 😥</p>
                    <p>Mas você pode ver mais sobre todo o trabalho de 
                    desenvolvimento do app clicando ai em baixo ⬇</p>
                    <a target="_blank" href="https://felipesenaux.medium.com/pet-usando-a-tecnologia-para-unir-um-pet-a-um-lar-f31af3d7edeb">Ver trabalho</a> 
                </div>
                <div className={Style.hero2}>
                    <img src="/img/imagem case.png" alt="App Case" />
                </div>
            </div>
        </div>
        </>
    )
}