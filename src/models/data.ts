//-------------- SKILLS
export interface technologiesInterface{
    id: number
    name: string
    icon: JSX.Element
}

//-------------- PROJECTS
export interface projectsInterface{
    id: string
    title: string
    description: string
    images: string[]
    linkCode: string | null
    linkPage: string | null
    video?: string
    technologies: technologiesInterface[]
    in_process?: boolean
}