//----- Dependencies
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";

//----- Models
import { fullArticleInterface } from "@/models"


interface Props{
    article: fullArticleInterface
}


export default function ArticleData({ article }:Props){
    return <section className="ArticleData">
        <Link className="ArticleData__comeBack" to={'/blog'}>
            <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FAEDBC"><path d="M16 12H8m0 0l3.5 3.5M8 12l3.5-3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#FAEDBC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            BLOG
        </Link>
        <div className="ArticleData__date">
            <svg width="20px" height="20px" strokeWidth={1.2} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FAEDBC"><path d="M12 6v6h6" stroke="#FAEDBC" strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#FAEDBC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            { new Date(article.createdAt).toLocaleDateString("es-ES",{year: "numeric", month: "long", day: "numeric"}) }
        </div>
        <h2 className="ArticleData__title">{ article.title }</h2>
        <span className="ArticleData__category">{ article.category.name }</span>
        <Markdown className="ArticleData__content">
            { article.content }
        </Markdown>
        <div className="ArticleData__separator"></div>
        <article className="ArticleData__mostArticlesContainer">
            <h3 className="ArticleData__h3">ARTICULOS RELACIONADOS</h3>
            <div className="ArticleData__articlesContainer">

            </div>
        </article>
    </section>
}