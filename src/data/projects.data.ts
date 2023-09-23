//-------------- Icons
import { FaHtml5, FaCss3Alt, FaJsSquare, 
    FaNodeJs, FaReact, FaSass } from "react-icons/fa"
import { SiTypescript, SiJson, SiMysql, SiMarkdown, SiPhp, SiGatsby } from "react-icons/si"
import { HiTemplate } from "react-icons/hi"

//--------------- interface
import { projectsInterface } from "../models"


export const ProjectsData:projectsInterface[] = [
    {
        id:"fH36dr52y7",
        title:"Sitio web para consultora",
        description:"Sitio web para una consultora en el área industrial. La misma cuenta con varias páginas, las cuales tienen distintos diseños y cada uno adaptado a dispositivos móviles.\nHay varios métodos de comunicación, a través de formularios. También hay Interacción con base de datos, tanto por parte de los usuarios, para visualizar datos como cursos y vacantes de trabajo, como por el cliente, que debe poder modificar los datos mediante una dashboard.",
        images:["https://res.cloudinary.com/dyrpgj8od/image/upload/v1692212957/Portfolio/868shots_so_ajatrp.png","https://res.cloudinary.com/dyrpgj8od/image/upload/v1692212957/Portfolio/385shots_so_tzixkw.png"],
        linkCode:"https://github.com/Lauty128/Site-for-consultancy",
        linkPage:'https://lautarosilverii.000webhostapp.com/',
        in_process: true,
        technologies: [
            {
                id: 0,
                name: "HTML",
                icon: FaHtml5()
            },
            {
                id: 1,
                name: "Sass",
                icon: FaSass()
            },
            {
                id: 2,
                name: "JavaScript",
                icon: FaJsSquare()
            },
            {
                id: 3,
                name: "PHP",
                icon: SiPhp()
            },
            {
                id: 4,
                name: "MYSQL",
                icon: SiMysql()
            },
            {
                id: 5,
                name: "JSON",
                icon: SiJson()
            },
        ]
    },
    {
        id:"iu2jdrh234",
        title:"Monza Dashboard",
        description:`Este proyecto se trata de una aplicación para administrar el stock de vehiculos de una concesionaria de autos usados. Se divide en una API , hecha con Express, la cual se comunica con una base de datos SQL y la el cliente, que está hecho con ReactJS y TypeScript (con ViteJs).`,
        images:["https://res.cloudinary.com/dyrpgj8od/image/upload/v1692212957/Portfolio/Monza_tvlzaw.png","https://res.cloudinary.com/dyrpgj8od/image/upload/v1692212957/Portfolio/Monza_1_oomgsc.png"],
        linkCode:"https://github.com/Lauty128/Monza-dashboard",
        linkPage:null,
        video:"https://youtu.be/RlyhUqZ6SAo",
        technologies: [
            {
                id: 0,
                name: "HTML",
                icon: FaHtml5()
            },
            {
                id: 1,
                name: "TypeScript",
                icon: SiTypescript()
            },
            {
                id: 2,
                name: "Sass",
                icon: FaSass()
            },
            {
                id: 3,
                name: "ReactJS",
                icon: FaReact()
            },
            {
                id: 4,
                name: "NodeJS",
                icon: FaNodeJs()
            },
            {
                id: 5,
                name: "MYSQL",
                icon: SiMysql()
            },
        ]
    },
    {
        id:"bqef3f9ehr",
        title:"Blog",
        description:"Esta API esta desarrollada con Express. Se utiliza una base de datos SQL para almacenar la informacion y un ORM, en este caso sequelize, para administrar la base de datos.\r\nEl contenido de los articulos se almacena en formato Markdown y luego el codigo es formateado en el cliente para ser mostrado en la pagina.",
        images:["https://res.cloudinary.com/dyrpgj8od/image/upload/v1695494775/Portfolio/121shots_so_cpdaog.png"],
        linkCode: "https://github.com/Lauty128/blog",
        linkPage: "https://lautarosilverii.blog/",
        technologies: [
            {
                id: 0,
                name: "Gatsby",
                icon: SiGatsby()
            },
            {
                id:1,
                name: "React",
                icon: FaReact()
            },
            {
                id: 2,
                name: "CSS",
                icon: FaCss3Alt()
            },
            {
                id: 3,
                name: "Markdown",
                icon: SiMarkdown()
            },
            
        ]
    },
    {
        id:"z9dc59otjm",
        title:"Portafolio",
        description:`Este proyecto fue realizado con ReactJS y Typescript. Para crear el proyecto utilicé Vite, el cual me configuro el proyecto para trabajarlo con estas dos tecnologías. No tengo conocimientos avanzados sobre Typescript, pero me pareció una buena forma de comenzar a utilizarlo y aprender más sobre el mismo.
        El portafolio tiene un diseño sencillo, cuenta con interactividad, un formulario para enviarme información de contacto, algunas animaciones y es responsivo.`,
        images:["https://res.cloudinary.com/dyrpgj8od/image/upload/v1692212958/Portfolio/portfolio_yablfr.png","https://res.cloudinary.com/dyrpgj8od/image/upload/v1692212957/Portfolio/portfolio1_ifqn9y.png"],
        linkCode: "https://github.com/Lauty128/Personal-Portfolio",
        linkPage: "/",
        technologies: [
            {
                id: 0,
                name: "React",
                icon: FaReact()
            },
            {
                id: 1,
                name: "TypeScript",
                icon: SiTypescript()
            },
            {
                id: 2,
                name: "Css",
                icon: FaCss3Alt()
            },
            {
                id:3,
                name: "Json",
                icon: SiJson()
            }
        ]
    },
    {
        id:"2f46dru2y4",
        title:"CSV Translator",
        description:"Este proyecto permite crear, visualizar y modificar archivos .csv de manera rápida y sencilla. También se puede crear una tabla de frecuencias agrupadas en intervalos, mediante los datos proporcionados, dependiendo la amplitud o cantidad de clases deseadas.\nEsta desarrollado con NodeJS, usando Express. El cliente trabaja con EJS y LayoutsEJS.",
        images:["https://res.cloudinary.com/dyrpgj8od/image/upload/v1692212958/Portfolio/csv_ovkmx6.png","https://res.cloudinary.com/dyrpgj8od/image/upload/v1692212958/Portfolio/csv1_oj57ev.png","https://res.cloudinary.com/dyrpgj8od/image/upload/v1692212958/Portfolio/csv2_mqszp0.png"],
        linkCode:"https://github.com/Lauty128/CSV-translator",
        linkPage:'https://www.csv-translator.online/',
        technologies: [
            {
                id: 0,
                name: "EJS",
                icon: HiTemplate()
            },
            {
                id: 1,
                name: "JavaScript",
                icon: FaJsSquare()
            },
            {
                id: 2,
                name: "Sass",
                icon: FaSass()
            },
            {
                id: 3,
                name: "NodeJS",
                icon: FaNodeJs()
            }
        ]
    },
    {
        id:"7bd015rfa8",
        title:"Juego 'Ta-te-ti'",
        description:"Un sencillo Ta-Te-Ti con un diseño moderno. El mismo es un juego por turnos, cuenta con validación de ganador y bloqueo del juego. También se puede reiniciar el juego cuando se lo desee. Las propiedades del juego están hechas con POO para trabajar de manera más estructurada. Utilice HTML, CSS y JavaScript puro, sin ninguna librería o framework.",
        images:["https://res.cloudinary.com/dyrpgj8od/image/upload/v1692212958/Portfolio/tateti_fkvez8.png"],
        linkCode: "https://github.com/Lauty128/TicTacToe-Game",
        linkPage: "https://lauty128.github.io/TicTacToe-Game/",
        technologies: [
            {
                id: 0,
                name: "Html",
                icon: FaHtml5()
            },
            {
                id: 1,
                name: "Css",
                icon: FaCss3Alt()
            },
            {
                id: 2,
                name: "JavaScript",
                icon: FaJsSquare()
            }
        ]
    },
    {
        id:"bivyq538uu",
        title:"Convertir numero natural a romano",
        description:"El proyecto cuenta con un algoritmo que, dependiendo de la cantidad de números ingresados, agrupa los números naturales y les va agregando su valor correspondiente en forma de número romano. Este conversor está hecho para reconocer valores del 0 al 1000. Se podría hacer más grande ajustando algunas propiedades, pero quise dejarlo en 1000 para que no queden valores tan grande",
        images:["https://res.cloudinary.com/dyrpgj8od/image/upload/v1692212957/Portfolio/conversor_msujrg.png"],
        linkCode: "https://github.com/Lauty128/Coverter-Number-Natural-to-Roman",
        linkPage: "https://lauty128.github.io/Coverter-Number-Natural-to-Roman/",
        technologies: [
            {
                id: 0,
                name: "Html",
                icon: FaHtml5()
            },
            {
                id: 1,
                name: "Css",
                icon: FaCss3Alt()
            },
            {
                id: 2,
                name: "JavaScript",
                icon: FaJsSquare()
            }
        ]
    },
    {
        id:"bij1leawo0",
        title:"Juego 'Piedra, Papel o Tijera'",
        description:"Juego sencillo con validacion de ganador y cambio de eleccion. Igual que el de Ta-Te-Ti, la propiedades del juego estan hechas con POO para trabajar de forma maas estructurada y las elecciones por parte de la CPU son completamente aleatorias.",
        images:["https://res.cloudinary.com/dyrpgj8od/image/upload/v1692213338/Portfolio/26shots_so_arav7b.png"],
        linkCode: "https://github.com/Lauty128/Game",
        linkPage: "https://lauty128.github.io/Game/",
        technologies: [
            {
                id: 0,
                name: "Html",
                icon: FaHtml5()
            },
            {
                id: 1,
                name: "Css",
                icon: FaCss3Alt()
            },
            {
                id: 2,
                name: "JavaScript",
                icon: FaJsSquare()
            }
        ]
    }
]