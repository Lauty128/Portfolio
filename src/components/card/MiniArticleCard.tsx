//----- Dependencies
import { Link } from "react-router-dom"

//----- Models
import { articleInterface } from "../../models/data"

//----- Utils
import { parseTitle } from "../../utils/article.util"


export function ArtilceCard(article:articleInterface, change_is_inicio: { (actualState: boolean): void; (arg0: boolean): void }){
    const date = new Date(article.createdAt)

    return  <Link to={`/blog/${parseTitle(article.title)}`} className="MiniArticleCard" key={`${article.id}`} onClick={() => change_is_inicio(false)}>
                <img src={article.image} alt={article.alt} className="MiniArticleCard__image" data-aos="fade-left" />
                <div className="MiniArticleCard__div"  data-aos="fade-left">
                    <span className="MiniArticleCard__span">{date.toLocaleDateString("es-ES",{year: "numeric", month: "long", day: "numeric"})}</span>
                    <h3 className="MiniArticleCard__h3">{article.title}</h3>
                </div>
            </Link>
}