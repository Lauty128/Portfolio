//------ Models
import { useState } from "react"

//------ Models
import { projectsInterface, technologiesInterface } from "../../models"

//------ Assets
import { FaCode, FaEye, FaVideo, FaEyeSlash, FaAngleRight, FaAngleLeft } from 'react-icons/fa'


export function ProjectCard(project:projectsInterface):JSX.Element{
    const [slider, setSlider] = useState<Number>(0);
    const [index, setIndex] = useState<Number>(0);

    //----- Functions
    function changeImage(number:Number):void{
        setIndex(Number(index) + Number(number));

        const newSlider = Number(slider) + ((number == 1) ? -25 : 25);
        setSlider(newSlider);
    }
    
    const technologiesList = (technologies:technologiesInterface[]) => 
                technologies.map(technology=>(  
                    <div key={`${technology.id}`} className='Project__technology' title={technology.name}>
                        {technology.icon}
                    </div>
                    ))

    
    
    return(
        <div className="Project" key={project.id} data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                <div className="Project__imageContainer">
                    <div className="Project__images" style={{marginLeft:`${slider}em`}}>
                        {
                            project.images.map((image, index)=>{
                                return <img src={image} key={index} alt="alt de imagen" className="Project__image" />
                            })
                        }

                    </div>

                    {/*--------------- CARROUSEL OF IMAGES --------------- */}
                    {
                        (project.images.length > 1)
                        ?   <>
                            {
                                (Number(index) > 0)
                                ? <FaAngleLeft className="Project__arrowLeft" onClick={()=> changeImage(-1)} />
                                : ''
                            }
                            {
                                (Number(index) < (project.images.length - 1))
                                ? <FaAngleRight className="Project__arrowRight" onClick={()=> changeImage(1)} />
                                : ''
                            }
                            </>
                        : ''
                    }

                    <div className="Project__technologiesContainer">
                        { technologiesList(project.technologies) }
                    </div>
                </div>

                <div className="Project__textContainer">
                    <h3 className="Project__title">{project.title}</h3>

                    {/* <p className="Project__description">
                        {`${project.description}`}
                    </p> */}

                     { project.linkCode ?
                        <button className="Project__button"> 
                            <a href={project.linkCode}><FaCode /> Codigo</a> 
                        </button>
                        : 
                        <button className="Project__button Project__button-noAvailable"> 
                            <a><FaCode /> Codigo no disponible</a> 
                        </button>
                    }

                    { project.linkPage ?
                        <button className="Project__button"> 
                            <a href={project.linkPage}><FaEye /> Pagina</a> 
                        </button>
                        : 
                        <button className="Project__button Project__button-noAvailable"> 
                            <a><FaEyeSlash /> Pagina no disponible</a> 
                        </button>
                    }
                    { project.video 
                        ? <button className="Project__button Project__button--video"> 
                            <a href={project.video}><FaVideo /> Video</a> 
                          </button>
                        : ""
                    }
                    { project.in_process
                        ? <span style={{display:'block', marginTop:'8px', fontSize:'1.2em', color:'#FAEDBC'}}>Trabajando Actualmente..</span>
                        : ''
                    }
                </div>
            </div>
    )
}