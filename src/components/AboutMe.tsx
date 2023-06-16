//----- Assets
import { FaFileAlt } from 'react-icons/fa';
import image from '../assets/retrato.webp';
import cv_url from '../assets/CV.pdf'

//----- Components
import { MoreInfo } from './';


export function AboutMe(){
    return (
    <section id="AboutMe" className="AboutMe">
        <div className="AboutMe__container">
                <div className="AboutMe__imageContainer">
                    <img src={image} alt="Imagen Mia" className="AboutMe__image" data-aos="zoom-in" data-aos-delay="100"/>
                </div>
                <div className="AboutMe__textContainer">
                    <h3 className="AboutMe__h3">SOBRE MI</h3>
                    <p className="AboutMe__p">
                    Hola, mi nombre es Lautaro, tengo 20 años y estoy en busca de mi primer trabajo como desarrollador web. 
                    <br />
                    Comencé en este mundo de la programación de manera autodidacta, obteniendo información y aprovechando cualquier oportunidad para poder aprender algo nuevo. 
                    <br />
                    <br />
                    Tengo muchas ganas de poder comenzar mi carrera profesional, obtener experiencia y aprender mucho mas
                    </p>
                    <a id="buttonProjects" href={cv_url} download={'CV | Lautaro Silverii.pdf'} 
                    className="AboutMe__button">
                        <div className="AboutMe__effectButton"></div>
                        <FaFileAlt />
                        <h4 className="AboutMe__h4">DESCARGAR CV</h4>
                    </a>
                </div>
            </div>

            <MoreInfo />
    </section>
    )
} 