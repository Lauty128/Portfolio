//-------- Dependencies


//-------- Components
    import { Articles, Filters } from './'


export function BlogLayout(){

    return(
        <section className='Blog'>
            <Filters />
            <Articles />
        </section>
    )
}