//---------- Models
import { articlesOKResponse } from "../models/data"


export async function getArticles(size:Number = 7, page:Number = 0):Promise<articlesOKResponse | null>{
    const url = `${import.meta.env.VITE_BLOG_URL}api/articles?size=${size}&page=${page}`

    const data:Promise<articlesOKResponse> = fetch(url)
                    .then(response=> response.json())

    if(data && (await data).status == 200) return data
    else return null
}