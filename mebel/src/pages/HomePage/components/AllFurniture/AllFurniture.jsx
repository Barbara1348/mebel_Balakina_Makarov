import style from "./AllFurniture.module.css"

function AllFurniture() {

    return (
        <>
            <div className={style.all_furniture}>
                <div className={style.group}>
                    <h2 className={style.h2}>All Furniture</h2>
                    <ul className={style.ul}>
                        <li className={style.active}>Shop By Room</li>
                        <li className={style.unactive}>Shop By Category</li>
                        <li className={style.unactive}>Shop By Style</li>
                    </ul>
                </div>
                <div className={style.container}>
                    <img src="./img/Group 8990.webp" alt="" loading="lazy"/>
                    <div className={style.buttons}>
                        <button className={style.button}>
                            <img src="./img/Group 8917.svg" alt="" loading="lazy"/>
                            <p>Living Room</p>
                        </button>
                        <button className={style.button}>
                            <img src="./img/Group 8923.svg" alt="" loading="lazy"/>
                            <p>Kitchen</p>
                        </button>
                        <button className={style.button}>
                            <img src="./img/Group 8925.svg" alt="" loading="lazy"/>
                            <p>Dining Room</p>
                        </button>
                        <button className={style.button1}>
                            <img src="./img/Group 8926.svg" alt="" loading="lazy"/>
                            <p>Office</p>
                        </button>
                        <button className={style.button}>
                            <img src="./img/Group 8927.svg" alt="" loading="lazy"/>
                            <p>Bed Room</p>
                        </button>
                        <button className={style.button}>
                            <img src="./img/Group 8928.svg" alt="" loading="lazy"/>
                            <p>Hallway</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllFurniture