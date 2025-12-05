import style from './Info1.module.css'

function Info1() {
    return (
        <>
            <div className={style.div}>
                <div className={style.container}>
                    <h3 className={style.h3}>From a studio in London to a global brand with over 400 outlets</h3>
                    <p className={style.p}>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                    <button className={style.button}>Explore More</button>
                </div>
                <img className={style.img} src="./img/Image (5).webp" alt="" loading="lazy" />
            </div>
        </>
    )
}

export default Info1