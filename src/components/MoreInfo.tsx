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
            <div className="MoreInfo__text">
                <p>
                    Como dije anteriormente, ingrese en el mundo de la programación de manera totalmente autodidacta, aprendiendo a traves de videos, foros y muchos errores 😁.
                </p>
                <p>
                    Hice mis primeros pasos realizando algunos proyectos con HTML, CSS y JavaScript puro hasta poder tener un dominio bastante avanzado, luego comenzó a llamarme la atención NodeJS y comencé a trabajar con él, junto a ExpressJS, con el fin de crear mi propio servidor.
                </p>
                <p>
                    Hoy en día trabajo enfocado en el front-end, utilizando herramientas como React y Sass para poder agilizar el desarrollo, así como otras herramientas que permiten organizar mi trabajo, como lo es Typescript. <br />
                </p>
                <p>
                    Este portafolio es un reflejo de mi viaje, mis logros y mis aspiraciones. Te invito a explorar mis proyectos, leer mis artículos y conocer más sobre mi enfoque hacia el desarrollo web. Si estás interesado en colaborar en proyectos emocionantes, aprender juntos o simplemente entablar una conversación sobre la tecnología, estaré encantado de hacerlo. <br />
                </p>
                <p>
                    Puedes entrar y conocer un poco más haciendo click aquí.
                </p>
            </div>
            
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