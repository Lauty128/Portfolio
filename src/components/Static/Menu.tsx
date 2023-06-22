//----- Dependencies
    import { usePagesStore } from '@/store';
    import { Link } from 'react-router-dom'

//----- Assets
    import logo from '@/assets/logo-mini.png'

    

export function Menu(){
    //-------------------- State
    const { is_inicio, change_is_inicio } = usePagesStore()
    
    //-------------------- Menu Button
    const toggleButton = (e:any)=>{
        if(window.innerWidth > 700) return;

        let target = e.target
        if(target.parentNode.classList.contains("Menu__h3")){
            // If <e.target == "h3"> then the value of the "target" constant is changed.To reuse the function
            target = target.parentElement
                    .parentElement.previousElementSibling;
        }
        
        target.classList.toggle("Menu__button--active")
        target.nextElementSibling.classList.toggle("Menu__links--active")
    }


    return (
    (is_inicio)
        ?   
        <nav className="Menu" id="Menu">
            <img src={logo} alt="logo portafolio" className="Menu__image" />
            
            <div className="Menu__button" onClick={toggleButton}>
                <span className="Menu__buttonDiv1"></span>
                <span className="Menu__buttonDiv2"></span>
                <span className="Menu__buttonDiv3"></span>
            </div>
        
            <div className="Menu__links">
                <h3 className="Menu__h3 Menu__h3--main">
                    <a onClick={toggleButton} href="#Home">INICIO</a>
                </h3>
                <h3 className="Menu__h3">
                    <a onClick={toggleButton} href="#AboutMe">SOBRE MI</a>
                </h3>
                <h3 className="Menu__h3">
                    <a onClick={toggleButton} href="#Projects">PROYECTOS</a>
                </h3>
                <h3 className="Menu__h3">
                    <a onClick={toggleButton} href="#ContactMe">CONTACTAME</a>
                </h3>
                <h3 className="Menu__h3 Menu__h3--blog">
                    <Link onClick={()=> change_is_inicio(false)} to={"/blog"}>BLOG</Link>
                </h3>
            </div>
        </nav>
        :   
        <div className='Menu Menu--blog'>
        <Link onClick={()=> change_is_inicio(true)} to={'/'} className='Menu--blog__link'>
            <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FAEDBC"><path d="M16 12H8m0 0l3.5 3.5M8 12l3.5-3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#FAEDBC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <span>VOLVER A INICIO</span>
        </Link>  
        </div>
)}