//-------------- ARTICLES
export interface articleInterface{
    id:String
    title: string;
    image: string;
    createdAt: string;
    alt: string;
    category:{ id:string, name:string }
}

export interface articlesOKResponse{
    status: number;
    data: articleInterface[];
    total: number;
}

export interface paginationInterface{
    page: number
    total: number
    size: number
}

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
    image: string
    linkCode: string | null
    linkPage: string | null
    video?: string
    technologies: technologiesInterface[]
}