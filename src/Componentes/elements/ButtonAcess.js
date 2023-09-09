import styles from './ButtonAcess.module.css';

function ButtonAcess({text, link}){
    return(
        <div >
            <a href={link}>
            <button className={styles.btn}>
                {text}
            </button>
            </a>
        </div>
    )
}

export default ButtonAcess