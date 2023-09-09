//COMPONENTES NAVEBAR

    import styles from './Navbar.module.css';
    //importando os icones do React Icons
    import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
    //imporatndo bootstrap para linkar o itens da lista com o site do portfolio
    import Nav from 'react-bootstrap/Nav'

    function Navbar(){
        return (
            <div className={styles.Navbar}>
                <ul>
                    {/* navLink chama href com id do destino  */}
                    <li><Nav.Link href='#presentation'>Apresentação</Nav.Link></li>
                    <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
                    <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
                </ul>
                <ul>
                    {/* <Fanome do icone> para importar/ size{}para estilizar o tamanho do icone */}
                    {/* usamos tag 'a' para criar um link que direciona para nossas redeSociais */}
                    <li><a href='https://www.instagram.com/giva_g_silva/'><FaInstagram size={30}/></a></li>
                    <li><a href='https://github.com/Giva04'><FaGithub size={30}/></a></li>
                    <li><a href='https://www.linkedin.com/in/givanildo-g-silva-b92083230/'><FaLinkedin size={30}/></a></li>
                </ul>

            </div>
        )
    }

    export default Navbar