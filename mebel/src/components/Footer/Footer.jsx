import style from "./Footer.module.css"

function Footer() {

    return (
        <>
            <footer>
                <div className={style.container}>
                    <div className={style.group}>
                        <img src="./img/DudeShape.svg" alt="" loading="lazy" />
                        <p className={style.p}>Lorem ipsum dolor sit amet, conse
                            ctetur adipiscing elit, sed eiusmod tempor incididunt ut labore .</p>
                        <h5>Follow Us :</h5>
                        <div className={style.icons}>
                            <img src="./img/Group 8872.svg" alt="" loading="lazy"/>
                            <img src="./img/Group 8873.svg" alt="" loading="lazy"/>
                            <img src="./img/Group 8874.svg" alt="" loading="lazy"/>
                            <img src="./img/Group 8892.svg" alt="" loading="lazy"/>
                        </div>
                    </div>
                    <div className={style.group}>
                        <h5>Take a tour</h5>
                        <ul className={style.ul}>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Product</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className={style.group}>
                        <h5>Our company</h5>
                        <ul className={style.ul}>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Media</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className={style.group}>
                        <h5>Subscribe</h5>
                        <p className={style.p}>Subscribe to get the latest news from us</p>
                        <form className={style.form} action="">
                            <input className={style.input} type="text" placeholder="Email Address" />
                            <button className={style.button}>
<img src="./img/arrow-pointing-to-right 1.svg" alt="" />
                            </button>
                        </form>
                    </div>
                </div>
                <p className={style.rights}>Copyright @ 2021. Crafted with love.</p>

            </footer>

        </>
    )
}

export default Footer