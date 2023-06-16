//------ Assets
import { languages, tools, frameworks, technologies } from "../data"

//------ Models
import { technologiesInterface } from "../models"

//------ Functions
function Technologies(data:technologiesInterface[]){
    return data.map(element =>{
        return  <div className="Skills__icon" key={`${element.id}`} title={element.name} >
                    {element.icon}
                </div> 
    })
}


export function Skills():JSX.Element{
    return(
        <section className="Skills" id="Skills">

            <div className="Skills__container" data-aos="zoom-out-up" data-aos-duration="600"> 
                <h2 className="Skills__h2">LENGUAJES</h2>
                { Technologies(languages) }
            </div>

            <div className="Skills__container" data-aos="zoom-out-up" data-aos-duration="600">
                <h2 className="Skills__h2">HERRAMIENTAS</h2>
                { Technologies(tools) }
            </div>

            <div className="Skills__container" data-aos="zoom-out-up" data-aos-duration="600">
                <h2 className="Skills__h2 Skills__h2--framework">FRAMEWORKS & LIBRERIAS</h2>
                { Technologies(frameworks) }
            </div>
            
            <div className="Skills__container" data-aos="zoom-out-up" data-aos-duration="600"> 
                <h2 className="Skills__h2">TECNOLOGIAS</h2>
                { Technologies(technologies) }
            </div>

        </section>
    )
} 