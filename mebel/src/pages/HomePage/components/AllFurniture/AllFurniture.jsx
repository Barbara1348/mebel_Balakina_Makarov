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
                    <img src="./public/img/Group 8990.png" alt="" />
                    <div className={style.buttons}>
                        <button className={style.button}>
                            <img src="./public/img/Group 8917.svg" alt="" />
                            <p>Living Room</p>
                        </button>
                        <button className={style.button}>
                            <img src="./public/img/Group 8923.svg" alt="" />
                            <p>Kitchen</p>
                        </button>
                        <button className={style.button}>
                            <img src="./public/img/Group 8925.svg" alt="" />
                            <p>Dining Room</p>
                        </button>
                        <button className={style.button1}>
                            <img src="./public/img/Group 8926.svg" alt="" />
                            <p>Office</p>
                        </button>
                        <button className={style.button}>
                            <img src="./public/img/Group 8927.svg" alt="" />
                            <p>Bed Room</p>
                        </button>
                        <button className={style.button}>
                            <img src="./public/img/Group 8928.svg" alt="" />
                            <p>Hallway</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllFurniture