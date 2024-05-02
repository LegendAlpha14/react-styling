import styles from  './mcomponent1.module.css'

export default function ModuledComponent1() {

    return(
    <div className={styles.component1}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis provident dolore perferendis 
            reiciendis cupiditate consequuntur ut! Eligendi voluptas laboriosam dolor quisquam similique 
            quae atque! Ducimus iusto corporis eius. Amet, enim!</p>

        <button className={styles.btn}>Click Me !</button>
    </div>)
}