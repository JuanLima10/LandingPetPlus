import Style from './catalog.module.scss'

export default function Catalog(){
    return(
        <>
        <div className={Style.Catalog}>
            <div className={Style.CatalogContainer}>
                <div className={Style.TextUp}>
                    <p>Aqui os pets não são produtos eles<br/>tem uma história...</p>
                    <p>Nada mais justo que a gente apresentar essas histórias a você</p>
                </div>
                <div className={Style.Prints}>
                    <div className={Style.Print1}>
                        <img src="/img/Print 01.png" alt="Print 1 do app" />
                    </div>
                    <div className={Style.Print2}>
                        <img src="/img/Print 02.png" alt="Print 2 do app" />
                    </div>
                    <div className={Style.Print3}>
                        <img src="/img/Print 03.png" alt="Print 3 do app" />
                    </div>
                </div>
                <p>É assim que os pets são apresentados 🐕</p>
            </div>
        </div>
        </>
    )
}