//----- Models
import { articleInterface } from "@/models/data"

//----- Utils
import { parseTitle } from "@/utils/article.util"


export function ArtilceCard(article:articleInterface){
    const date = new Date(article.createdAt)

    return  <a href={`${import.meta.env.VITE_BLOG_URL}articulos/${parseTitle(article.title)}`} className="ArticleCard" key={`${article.id}`}>
                <img src={article.image} alt={article.alt} className="ArticleCard__image" data-aos="fade-left" />
                <div className="ArticleCard__div"  data-aos="fade-left">
                    <span className="ArticleCard__span">{date.toLocaleDateString("es-ES",{year: "numeric", month: "long", day: "numeric"})}</span>
                    <h3 className="ArticleCard__h3">{article.title}</h3>
                </div>
            </a>
}