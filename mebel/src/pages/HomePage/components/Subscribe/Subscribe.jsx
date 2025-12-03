import style from "./Subscribe.module.css"

function Subscribe() {

    return (
        <>
            <div className={style.subscribe}>
                <h2 className={style.h2}>Subscribe to get the latest news about us</h2>
                <p className={style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore at dolore.</p>
                <form className={style.form} action="">
                    <img src="./img/Group 16.svg" alt="" loading="lazy"/>
                    <input className={style.input} type="text" placeholder="Enter your email"/>
                    <button className={style.button}>Register</button>
                </form>
                
            </div>
        </>
    )
}

export default Subscribe