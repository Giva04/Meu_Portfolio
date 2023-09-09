import styles from './Card.module.css'
import ButtonAcess from './ButtonAcess'

function Card({img, title, tech, descrition, repo, site}){
    return(
        <div className={styles.card}>
            <a href={site}>
            <img src={img} alt='ERRO'/>
            {/* <img id='imgPort' src={ImgPortfolio}/> */}
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecologia</strong> {tech}</p>
                <p>{descrition}</p>
                <ButtonAcess text='Acesse o Repositório' link={repo}/>
            </section>

        </div>
    )
}

export default Card