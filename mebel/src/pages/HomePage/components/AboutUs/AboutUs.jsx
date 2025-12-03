import style from "./AboutUs.module.css"

function AboutUs() {

    return (
        <>
            <div className={style.about_us}>
                <img src="./img/Group 8988.png" alt="" loading="lazy"/>
                <div className={style.group}>
                    <div className={style.zagolovok}>
                        <h2>About Us</h2>
                        <p className={style.p}>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
                    </div>
                    <div className={style.container}>
                        <img src="./img/Shield.svg" alt="" loading="lazy"/>
                        <div className={style.text}>
                            <h3>Best Quality</h3>
                            <p className={style.little_text}>All of our furniture uses the best materials and choices</p>
                        </div>
                    </div>
                    <div className={style.container}>
                        <img src="./img/Galochka.svg" alt="" loading="lazy"/>
                        <div className={style.text}>
                            <h3>100% Secure</h3>
                            <p className={style.little_text}>All of our furniture uses the best materials and choices</p>
                        </div>
                    </div>
                    <div className={style.container}>
                        <img src="./img/Car.svg" alt="" loading="lazy"/>
                        <div className={style.text}>
                            <h3>Free Shopping</h3>
                            <p className={style.little_text}>All of our furniture uses the best materials and choices</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutUs