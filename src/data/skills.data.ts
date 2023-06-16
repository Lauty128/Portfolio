//-------------- Icons
import { FaHtml5, FaCss3Alt, FaJsSquare, 
    FaNodeJs, FaReact, FaSass,
    FaFigma, FaGitAlt, FaNpm,
    FaBuffer  } from "react-icons/fa"
import { SiCanva, SiVisualstudiocode, SiPhp, SiTypescript } from "react-icons/si"

//-------------- Interface
import { technologiesInterface } from "@/models"

//------------------------------------------------
export const languages:technologiesInterface[] = [
    {
        id:0,
        name:"Html",
        icon: FaHtml5()
    },
    {
        id:1,
        name:"Css",
        icon: FaCss3Alt()
    },
    {
        id:2,
        name:"JavaScript",
        icon: FaJsSquare()
    },
    {
        id:4,
        name:"TypeScript",
        icon: SiTypescript()
    },
    {
        id:4,
        name:"PHP",
        icon: SiPhp()
    }
]

export const tools:technologiesInterface[] = [
    {
        id:0,
        name:"Recursos Web",
        icon: FaBuffer()
    },
    {
        id:1,
        name:"Figma",
        icon: FaFigma()
    },
    {
        id:2,
        name:"Canva",
        icon: SiCanva()
    }
]

export const frameworks:technologiesInterface[] = [
    {
        id:0,
        name:"NodeJS",
        icon: FaNodeJs()
    },
    {
        id:1,
        name:"ReactJS",
        icon: FaReact()
    },
    {
        id:2,
        name:"Sass",
        icon: FaSass()
    }

]

export const technologies:technologiesInterface[] = [
    {
        id:0,
        name:"Npm",
        icon: FaNpm()
    },
    {
        id:1,
        name:"VsCode",
        icon: SiVisualstudiocode()
    },
    {
        id:2,
        name:"Git",
        icon: FaGitAlt()
    }
]





