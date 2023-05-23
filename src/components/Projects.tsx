//-------------- Data
import { ProjectsData } from "@/data"

//-------------- Components
import { ProjectCard } from "."


export function Projects(){

    return(
        <section className="Projects" id="Projects">
            
            <h2 className="Projects__title">PROYECTOS</h2>

            <div className="Projects__container">
                {
                    ProjectsData.map(project=> ProjectCard(project) )
                }
            </div>

        </section>
    )
}