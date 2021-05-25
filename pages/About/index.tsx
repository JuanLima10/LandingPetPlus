import Style from './about.module.scss'

export default function About(){
    return (
        <>
        <div className={Style.About}>
            <div className={Style.AboutContainer}>
                <div className={Style.TextUp}>
                    <p>Uma experiência diferente e unica <br/> ao adotar</p>
                    <p>Nosso foco é dar amor e lar aos animais a experiência deve <br/>
                    boa para você e para o bixinho!</p>
                </div>
                <div className={Style.Ilustrations}>
                    <div className={Style.Ilustration1}>
                        <img src="/img/ilustração 01.svg" alt="Primeira Ilustração" />
                        <p>Adote ou doe<br/>um pet</p>
                        <p>Você pode Procurar os pets na sua região ou doar um.<br/><br/>
                        temos a preocupação com os resgatadores que ficam muito tempo com os pets.</p>
                    </div>
                    <div className={Style.Ilustration2}>
                        <img src="/img/ilustração 02.svg" alt="Segunda Ilustração" />
                        <p>Conheça os pets de um jeito mais amoroso</p>
                        <p>Cada pet tem uma vida, uma história.<br/><br/>
                        Aqui você vai ver cada pet como se estivesse lendo sua história.<br/><br/>
                        Pets não são produtos em pratileiras !</p>
                    </div>
                    <div className={Style.Ilustration3}>
                        <img src="/img/ilustração 03.svg" alt="Terceira Ilustração" />
                        <p>Fale com os<br/>resgatadores</p>
                        <p>Por fim um meio mais fácil de entrar em contato com os resgatadores,<br/> 
                        não precisa ver listas e listas em sites...</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}