import style from "./AboutUs.module.css"

function AboutUs() {

    return (
        <>
            <div className={style.about_us}>
                <img src="./public/img/Group 8988.png" alt="" />
                <div className={style.group}>
                    <div className={style.zagolovok}>
                        <h2>About Us</h2>
                        <p className={style.p}>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
                    </div>
                    <div className={style.container}>
                        <img src="./public/img/Shield.svg" alt="" />
                        <div className={style.text}>
                            <h3>Best Quality</h3>
                            <p className={style.little_text}>All of our furniture uses the best materials and choices</p>
                        </div>
                    </div>
                    <div className={style.container}>
                        <img src="./public/img/Galochka.svg" alt="" />
                        <div className={style.text}>
                            <h3>100% Secure</h3>
                            <p className={style.little_text}>All of our furniture uses the best materials and choices</p>
                        </div>
                    </div>
                    <div className={style.container}>
                        <img src="./public/img/Car.svg" alt="" />
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