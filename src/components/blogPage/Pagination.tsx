//----- Dependencies
import { useArticlesStore } from "@/store"


export default function Pagination(){
    //---- States
    const { setArticles, pagination } = useArticlesStore()

    //---- Functions
    function changePage(num:number){
        const newPage = pagination.page + num
        setArticles(newPage)
    }

    return (
        <div className="Blog__pagination">
            {
                (pagination.page > 0)
                ? <span onClick={() => changePage(-1)}>{ '<' }</span>
                : ''
            }
            <span>{ pagination.page + 1 }</span>
            {
                (((pagination.page + 1) * pagination.size) < pagination.total)
                ? <span onClick={() => changePage(1)}>{'>'}</span>
                : ''
            }
            
        </div>
    )
}