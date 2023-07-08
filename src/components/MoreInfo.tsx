//---------- Dependencies
import { useEffect } from 'react'
import { useArticlesStore, usePagesStore } from '@/store'

//---------- Models
import { articleInterface } from "../models/data"

//---------- Services
import { getArticles } from "../services/getData"

//---------- Components
import { ArtilceCard } from '.'
import { Link } from 'react-router-dom'


function articlesList(articles:articleInterface[] | null, change_is_inicio: (actualState: boolean) => void):any{
    if(articles == null){
        return [0,1,2].map(element=>{
            return  <div className="ArticlePreload" key={element}>
                        <div className="ArticlePreload__image"></div>
                        <div className="ArticlePreload__div">
                            <div className="ArticlePreload__text"></div>
                            <div className="ArticlePreload__title"></div>
                        </div>
                    </div>
        }) 
    }

    return articles.slice(0,3).map(article=> ArtilceCard(article, change_is_inicio))
}

export function MoreInfo(){
    //----- States
    const { articles, setArticles, pagination } = useArticlesStore()
    const { change_is_inicio } = usePagesStore()

    useEffect(()=>{
        if(articles === null || pagination.page > 0){
            (async()=>{
                // Store in sesion-storage the first page of articles 
                const data = await getArticles()
                if(data) setArticles(0);
            })()
        }
    },[])

    return (
    <div className="MoreInfo">
        <div className="MoreInfo__textContainer">
            <h2 className="MoreInfo__title">MAS INFORMACION</h2>
            <p className="MoreInfo__text">Como dije anteriormente, ingrese en el mundo de la programación de manera totalmente autodidacta, aprendiendo de videos, foros y muchos errores 😁.  <br />
            Primero realicé algunos proyectos con HTML, CSS y JavaScript puro hasta poder tener un dominio bastante avanzado, luego comenzó a llamarme la atención NodeJS y comencé a trabajar con él, junto a ExpressJS, con el fin de crear mi propio servidor. <br />
            Hoy en día trabajo enfocado en el front-end, utilizando herramientas como React y Sass para poder agilizar el desarrollo de sitios web, así como otras herramientas que permiten organizar mi trabajo, como lo es Typescript. <br />
            Cuento con un blog, donde subo contenido interesante, ya sea de programación o de algún otro tema de interés personal. Anteriormente se encontraba en otro lado, pero por ciertas cuestiones ahora lo tengo junto al portafolio. <br />
            Puedes entrar y conocer un poco más haciendo click aquí.
            </p>
            
            <Link className="MoreInfo__button" to={'/blog'} onClick={() => change_is_inicio(false)}>
                ECHALE UN VISTAZO!
            </Link>
        </div>

        <div className="MoreInfo__aside">
            <div className="MoreInfo__articlesContainer">
                <h2 className="MoreInfo__articlesTitle">ULTIMOS POST</h2>
                { articlesList(articles, change_is_inicio) }
            </div>
        </div>
    </div>
    )
} 