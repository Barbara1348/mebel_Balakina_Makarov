import style from "./OurCustomers.module.css"

function OurCustomers() {

    return (
        <>
            <div className={style.our_customers}>
                <div className={style.container}>
                    <img src="./public/img/Group 9009.png" alt="" />
                    <div className={style.group}>
                        <h2>Our customers are very important to us</h2>
                        <p className={style.p}>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
                        <div className={style.feedback}>
                            <img src="./public/img/Ellipse 28.png" alt="" />
                            <div className={style.comment}>
                                <p className={style.user}>Mh Jibon</p>
                                <div className={style.otsenka}>
                                    <img src="./public/img/Group 65.svg" alt="" />
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