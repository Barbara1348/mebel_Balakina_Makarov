import style from './Section.module.css'

function Section() {
    return (
        <>
            <section className={style.section}>
                <img className={style.img} src="./img/creslo.webp" alt="" loading="lazy"/>
                <div className={style.container}>
                    <h1 className={style.h1}>We Help You Make Modern Furniture</h1>
                    <p className={style.p}>All of our furniture uses the best materials and choices for our customers. All of our furniture uses the best materials </p>
                    <button className={style.button}>Explore More</button>
                </div>
            </section>
        </>
    )
}

export default Section