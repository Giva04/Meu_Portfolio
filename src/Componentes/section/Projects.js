import ButtonAcess from '../elements/ButtonAcess'
import styles from './Projects.module.css';
import Card from '../elements/Card';
import landingPage from '../../image/Projects/landingPage.svg'
import movielist from '../../image/Projects/MovieList.svg'
import imgPort from '../../image/Projects/ImgPortfolio.svg'

function Projects(){
    return (
        <div className={styles.projects} id='projects'>
            <h1> Meus Projetos</h1>
            {/* dentro do card chamos as promiss  */}
            <Card
            img={imgPort}
            title="Meu Portfólio"
            tech="REACT"
            descrition="Portfólio desevolvido para demostrar meus conhecimentos
            na aréa de programação!"
            repo="https://github.com/Giva04/Meu_Portfolio"
            site="https://meu-portfolio-one-chi.vercel.app/"
            />
            <Card
            img={landingPage}
            title="LP-Projeto Arquitetura"
            tech="HTML, CSS e JS"
            descrition="Desenvolvimento de uma Landing Page para lançamento da formação de tecnología"
            repo="https://https://github.com/Giva04/Landing_page"
            site="hhttps://lpdnc001.netlify.app//"
            />
            <Card
            img={movielist} witdh='50px'
            title="Moive List"
            tech="REACT e JS"
            descrition="Projeto desenvolvido em React , replicando uma lista de filmes online"
            repo="https://github.com/Giva04/dnc-movie-list"
            site="https://dncmovie.netlify.app/"
            />
            
            
        </div>
    )
}

export default Projects