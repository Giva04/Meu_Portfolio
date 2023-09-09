import styles from './ButtonPresentation.module.css';

function ButtonPresentation({text, link}){
    return(
        <div>
            <a href={link}>
            <button className={styles.btn}>{text}

            </button>
            </a>
        </div>
    )
}

export default ButtonPresentation