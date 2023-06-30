//--------- Dependencies
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

//--------- Models
import { fullArticleInterface } from "@/models";

//--------- Services
import { getArticle } from "@/services/getData";

//--------- Components
import ArticleData from "./Article";

//--------- Interfaces
interface errorInterface{
    status: number,
    message: string
}


export function ArticleLayout(){
    //---- Params
    const { title } = useParams()
    
    //---- States
    const [ article,setArticle ] = useState<fullArticleInterface | null>(null)
    const [ isError,setIsError ] = useState<errorInterface | null>(null)

    useEffect(()=>{
        (async()=>{
            const data = await getArticle(title || '');
            
            if(data?.status == 200){
                return setArticle(data.data)
            }
            else setIsError({ status:data?.status || 500, message:data?.message || 'Ocurrio un error' })
        })()
    }, [])

    //---- Functions


    return(
        <>
            <section className="ArticleData">
            {
                (article)
                ? <ArticleData article={article} />
                : ''
            }
            </section>

            {
                isError
                ? <div className="ArticleData--error">
                    <span>Error {isError.status}</span>
                    <p>{ isError.message }</p>
                </div>
                : ''
            }
        </>
    )
}