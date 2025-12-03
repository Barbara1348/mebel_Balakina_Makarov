import style from "./Header.module.css"

function Header() {

    return (
        <>
            <header>
                <img src="./img/DudeShape1.svg" alt="" loading="lazy" />
                <nav className={style.nav}>
                    <ul className={style.ul}>
                        <li className={style.li}>Home</li>
                        <li className={style.li}>About</li>
                        <li className={style.li}>Features</li>
                        <li className={style.li}>Contact</li>
                    </ul>
                </nav>
                <div className={style.icons}>
                    <img src="./img/loupe 1.svg" alt="" loading="lazy"/>
                    <img src="./img/menu 1.svg" alt="" loading="lazy"/>
                </div>
            </header>
        </>
    )
}

export default Header