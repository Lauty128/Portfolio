//----- Assets
import { FaFileAlt } from 'react-icons/fa';
import image from '@/assets/retrato.jpg';

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
                    Hola, mi nombre es Lautaro, tengo 19 años y estoy en busca de mi primer trabajo como desarrollador web. <br />
                    Comencé en este mundo de la programación de manera autodidacta, obteniendo información y aprovechando cualquier oportunidad para poder aprender algo nuevo.
                    Tengo muchas ganas de poder comenzar mi carrera profesional, obtener experiencia y aprender mucho mas
                    </p>
                    <a id="buttonProjects" href="https://drive.google.com/file/d/1npHZcspj1FUnwCMK7yjlynu9iIH5_NuZ/view?usp=sharing" 
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