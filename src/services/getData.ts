//---------- Models
import { articleInterface, articlesOKResponse } from "@/models/data"


export async function getArticles(size:Number):Promise<articleInterface[] | null>{
    const url = `${import.meta.env.VITE_BLOG_URL}api/articles?size=${size}`

    const data:Promise<articlesOKResponse> = fetch(url)
                    .then(response=> response.json())

    if(data && (await data).status == 200) return (await data).data
    else return null
}