import style from "./Header.module.css"

function Header() {

    return (
        <>
            <header>
                <img src="./public/img/DudeShape1.svg" alt="" />
                <nav className="">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className={style.icons}>
                    <img src="./public/img/loupe 1.svg" alt="" />
                    <img src="./public/img/menu 1.svg" alt="" />
                </div>
            </header>
        </>
    )
}

export default Header