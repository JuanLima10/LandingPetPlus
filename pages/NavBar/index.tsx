import Style from './navBar.module.scss'
import Link from 'next/link'

export default function NavBar(){
    return(
        <>
        <div className={Style.NavBar}>
            <div className={Style.NavBarContainer}>
                <Link href="/"><img src="/img/Logo.svg" alt="Logo Pet+" /></Link>
                <div className={Style.btnsNavBar}>
                    <Link href="/Info"><a>Baixar App</a></Link>
                    <a target="_blank" href="https://felipesenaux.medium.com/pet-usando-a-tecnologia-para-unir-um-pet-a-um-lar-f31af3d7edeb">Ver mais</a>
                </div>
            </div>
        </div>
        </>
    )
}