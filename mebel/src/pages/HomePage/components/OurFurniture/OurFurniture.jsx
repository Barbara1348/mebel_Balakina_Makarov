import style from "./OurFurniture.module.css"

function OurFurniture() {

    return (
        <>
            <div className={style.our_furniture}>
                <h2>Our Popular Furniture</h2>
                <div className={style.group}>
                    <p className={style.p}>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
                    <div className={style.buttons}>
                        <button className={style.button_right}>
                            <img src="./img/Group 8969.svg" alt="" />
                        </button>
                        <button className={style.button_left}>
                            <img src="./img/Group 8968.svg" alt="" />
                        </button>
                    </div>
                </div>

                <div className={style.slider}>
                    <div className={style.container}>
                        <img src="./img/Rectangle 34.png" alt="" />
                        <div className={style.elements}>
                            <h4>White Swan Chair </h4>
                            <div className={style.text}>
                                <p className={style.p1}>$40</p>
                                <button className={style.button}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className={style.container}>
                        <img src="./img/Rectangle 38.png" alt="" />
                        <div className={style.elements}>
                            <h4>White Swan Chair </h4>
                            <div className={style.text}>
                                <p className={style.p1}>$40</p>
                                <button className={style.button}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className={style.container}>
                        <img src="./img/Rectangle 36.png" alt="" />
                        <div className={style.elements}>
                            <h4>White Swan Chair </h4>
                            <div className={style.text}>
                                <p className={style.p1}>$40</p>
                                <button className={style.button}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurFurniture