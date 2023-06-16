//---------- Models
import { useState, useEffect } from 'react'

//---------- Models
import { articleInterface } from "../models/data"

//---------- Services
import { getArticles } from "../services/getData"

//---------- Components
import { ArtilceCard } from '.'


function articlesList(articles:articleInterface[] | null):any{
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

    return articles.map(article=> ArtilceCard(article) )
}

export function MoreInfo(){

    const [articles, setArticles] = useState<articleInterface[] | null>(null)

    useEffect(()=>{
        (async()=>{
            const data:articleInterface[] | null = await getArticles(3)
            setArticles(data)
        })()
    },[])

    return (
    <div className="MoreInfo">
        <div className="MoreInfo__textContainer">
            <h2 className="MoreInfo__title">MAS INFORMACION</h2>
            <p className="MoreInfo__text">Como dije anteriormente, ingrese en el mundo de la programación de manera totalmente autodidacta, aprendiendo de videos, foros y muchos errores 😁.  <br />
            Primero realicé algunos proyectos con HTML, CSS y JavaScript puro hasta poder tener un dominio bastante avanzado, luego comenzó a llamarme la atención NodeJS y comencé a trabajar con él, junto a ExpressJS, con el fin de crear mi propio servidor. <br />
            En el 2022 me di cuenta de que me interesaba más el lado del front-end, por lo que comencé a trabajar con React, con el cual sigo aprendiendo e informándome de cosas nuevas. Justo este proyecto está realizado con React y TypeScript, utilizando Vite para crear el proyecto ya configurado. <br />
            Con el fin de poder seguir trabajando sobre React, comencé a trabajar con NextJs, en su versión 13, y, con el cual, pude crear mi propio blog. <br />
            Si tienes interés sobre el blog puedes entrar y conocer un poco más.
            </p>
            
            <a className="MoreInfo__button" href={import.meta.env.VITE_BLOG_URL}>
                ECHALE UN VISTAZO!
            </a>
        </div>

        <div className="MoreInfo__aside">
            <div className="MoreInfo__articlesContainer">
                <h2 className="MoreInfo__articlesTitle">ULTIMOS POST</h2>
                { articlesList(articles) }
            </div>
        </div>
    </div>
    )
} 