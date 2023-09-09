
import styles from './Presentation.module.css'

import ButtonPresentation from '../elements/ButtonPresentation'

function Presentation(){
    return(
        <div className={styles.presentation} id='Presentation'>
            <h3><strong>Bem-Vindo ao meu Portfólio</strong></h3>
            <h1>Olá, eu sou Givanildo Gomes! </h1>
            <p>Sou amante da tecnologia e soluções inovadoras.<br/>
                Como desenvolvedor Front-End, tenho como resposabilidade<br/>
                fornecer a melhor experiencia e satisfação para usuário.<br/>
                Minha missão e fornecer para o mercado os melhores projetos , e <br/>
                para a empresa o menor custo.
            </p>
            <ButtonPresentation link='https://github.com/Giva04' text='Conecte-se Comigo!!'/>
            

            
        </div>
    )
}

export default Presentation