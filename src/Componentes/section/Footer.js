import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css';
import ButtonAcess from "../elements/ButtonAcess";

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                    {/* <Fanome do icone> para importar/ size{}para estilizar o tamanho do icone */}
                    {/* usamos tag 'a' para criar um link que direciona para nossas redeSociais */}
                    <li><a href='https://www.instagram.com/giva_g_silva/'><FaInstagram size={30}/></a></li>
                    <li><a href='https://github.com/Giva04'><FaGithub size={30}/></a></li>
                    <li><a href='https://www.linkedin.com/in/givanildo-g-silva-b92083230/'><FaLinkedin size={30}/></a></li>
                </ul>
                <p>givagomes04@gmail.com</p>
                <p>Givanildo Gomes ₢ 2023</p>
                <ButtonAcess link='https://github.com/Giva04' text='Acesse o Repositório '/>  

        </div>
    )
}

export default Footer