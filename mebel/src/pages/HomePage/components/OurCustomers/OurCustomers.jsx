import style from "./OurCustomers.module.css"

function OurCustomers() {

    return (
        <>
            <div className={style.our_customers}>
                <div className={style.container}>
                    <img src="./img/Group 9009.png" alt="" loading="lazy"/>
                    <div className={style.group}>
                        <h2>Our customers are very important to us</h2>
                        <p className={style.p}>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
                        <div className={style.feedback}>
                            <img src="./img/Ellipse 28.png" alt="" loading="lazy"/>
                            <div className={style.comment}>
                                <p className={style.user}>Mh Jibon</p>
                                <div className={style.otsenka}>
                                    <img src="./img/Group 65.svg" alt="" loading="lazy"/>
                                    <p className={style.stars}>4.8</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurCustomers