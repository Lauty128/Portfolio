//------- Dependencies
    import { useEffect, ReactNode } from "react"
    import { useArticlesStore } from "@/store"

//------- Models
    import { articleInterface } from "@/models"

//------- Services
    import { getArticles } from "@/services/getData"

//------- Components
import { Pagination } from "."
import { Link } from "react-router-dom"

//------- Utils
import { parseTitle } from "@/utils/article.util"


export default function Articles(){
    //---- States
    const { articles, setArticles } = useArticlesStore()

    useEffect(()=>{
        console.log(articles);
        if(!articles){
            (async()=>{
                const data = await getArticles()
                if(data) setArticles(0);
            })()
        }
    },[])
    
    //---- Functions
    function PreLoad():ReactNode[]{
        return [0,1,2,3,4,5].map(element=>(
            <div className="ArticlePreload" key={element}>
                <div className="ArticlePreload__image"></div>
                <div className="ArticlePreload__div">
                    <div className="ArticlePreload__text"></div>
                    <div className="ArticlePreload__title"></div>
                </div>
            </div>
        ))
    }

    function Article(article:articleInterface):ReactNode{
        const url = parseTitle(article.title)
        return(
            <article className="ArticleCard" key={`${article.id}`}>
                <div className="ArticleCard__imageContainer">
                    <img src={article.image} alt="" className="ArticleCard__image" />
                </div>
                <div className="ArticleCard__info">
                    <span className="ArticleCard__date">
                        <svg width="20px" height="20px" strokeWidth={1.2} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FAEDBC"><path d="M12 6v6h6" stroke="#FAEDBC" strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#FAEDBC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        { new Date(article.createdAt).toLocaleDateString("es-ES",{year: "numeric", month: "long", day: "numeric"}) }
                    </span>
                    <h4 className={`ArticleCard__title ${(article.title.length > 25) ? "ArticleCard__title--long" : ''}`} title={ article.title }>{ article.title }</h4>
                    <div className="ArticleCard__extraInfo">
                        <span className="ArticleCard__category">{ article.category.name }</span>
                        <Link to={`/blog/${url}`} className="ArticleCard__moreInfo">Leer mas</Link>
                    </div>
                </div>
            </article>
        )
    }


    return (
        <section className="Blog__articlesSection">
            <h2 className="Blog__h2">Ultimos articulos</h2>
            <div className="Blog__articlesContainer">
                { (articles !== null)
                    ? articles.map(article=> Article(article) )
                    : PreLoad() 
                }
                <Pagination />
            </div>
        </section>
    )
}