import style from './Partners.module.css'

function Partners() {

    return (
        <>
            <div className={style.partners}>
                <h2 className={style.h2}>Trusted by 20,000+ companies</h2>
                <div className={style.container}>
                    <img src="./img/MasterCard.svg" alt="" loading="lazy"/>
                    <img src="./img/Airbnb.svg" alt="" loading="lazy"/>
                    <img src="./img/Uber.svg" alt="" loading="lazy"/>
                    <img src="./img/PayPal.svg" alt="" loading="lazy"/>
                    <img src="./img/Visa.svg" alt="" loading="lazy"/>
                    <img src="./img/Stripe.svg" alt="" loading="lazy"/>
                </div>
            </div>
        </>
    )
}

export default Partners