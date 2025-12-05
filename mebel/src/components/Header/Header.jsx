import style from "./Header.module.css"
import { Link } from "react-router-dom"

function Header() {

    return (
        <>
            <header>
                <img src="./img/DudeShape1.svg" alt="" loading="lazy" />
                <nav className={style.nav}>
                    <ul className={style.ul}>
                        <Link to="/"><li className={style.li}>Home</li></Link>
                        <Link to="/second"><li className={style.li}>About</li></Link>
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