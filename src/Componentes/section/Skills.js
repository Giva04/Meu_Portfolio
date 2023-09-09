import styles from './Skills.module.css';
// Importando as imagens
import javascript from '../../image/skills/javaScript.svg';
import css from '../../image/skills/css.svg';
import html from '../../image/skills/html.svg';
import react from '../../image/skills/react.svg';
import typeScript from '../../image/skills/typeScript.svg';

function Skills(link){
    return(
        <div className={styles.skill} id='skills'>
        <h1>Habilidades</h1>
        <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <a href={link='https://jogo-numero-oculto.vercel.app/'}> 
                <img src={javascript} /></a>
                <a href={link='https://regal-brigadeiros-857e43.netlify.app/'}>
                <img src={html}/></a>
                <a href={'https://poke-dex-list.vercel.app/'}>
                <img src={css}/></a>
                <a href={'https://dnc-movie-list-blue.vercel.app/'}>
                <img src={react}/></a>
                <img src={typeScript}/>
                
            </div>
        
        
        </div>
    )
}

export default Skills