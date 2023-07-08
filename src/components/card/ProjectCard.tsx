//------ Models
import { projectsInterface, technologiesInterface } from "../../models"

//------ Assets
import { FaCode, FaEye, FaVideo, FaEyeSlash } from 'react-icons/fa'


export function ProjectCard(project:projectsInterface):JSX.Element{
    
    const technologiesList = (technologies:technologiesInterface[]) => 
                technologies.map(technology=>(  
                    <div key={`${technology.id}`} className='Project__technology' title={technology.name}>
                        {technology.icon}
                    </div>
                    ))
    
    
    return(
        <div className="Project" key={project.id} data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                <div className="Project__imageContainer">
                    <img src={`${project.image}`} alt="alt de imagen" />
                    <div className="Project__technologiesContainer">
                        { technologiesList(project.technologies) }
                    </div>
                </div>

                <div className="Project__textContainer">
                    <h3 className="Project__title">{project.title}</h3>

                    <p className="Project__description">
                        {`${project.description}`}
                    </p>

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
                        ? <span style={{display:'block', marginTop:'20px', fontSize:'1.2em', color:'#FAEDBC'}}>Trabajando Actualmente..</span>
                        : ''
                    }
                </div>
            </div>
    )
}