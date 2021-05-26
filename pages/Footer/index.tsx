import Style from './footer.module.scss'
import Link from 'next/link'

export default function Footer(){
    return(
        <>
        <div className={Style.Footer}>
            <div className={Style.FooterContainer}>
                <Link href="/"><img src="/img/logo.svg" alt="Logo Pet+" /></Link>
                <div className={Style.btnsFooter}>
                    <Link href="/Info"><a>Baixar App</a></Link>
                    <a target="_blank" href="https://felipesenaux.medium.com/pet-usando-a-tecnologia-para-unir-um-pet-a-um-lar-f31af3d7edeb">Ver mais</a>
                </div>
            </div>
        </div>
        </>
    )
}