//----- Dependencies
    import { useState } from 'react';
    import { Link } from 'react-router-dom'

//----- Assets
    import logo from '../../assets/logo-mini.png'



export function Menu(){
    //-------------------- State
    const [is_inicio, set_is_inicio] = useState<boolean>((window.location.pathname === '/'))
    
    //-------------------- Menu Button
    const toggleButton = (e:any)=>{
        if(e.target.textContent === 'BLOG') set_is_inicio(false)
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
                    <Link onClick={toggleButton} to={"/blog"}>BLOG</Link>
                </h3>
            </div>
        </nav>
        :   
        <Link onClick={()=> set_is_inicio(true)} to={'/'}>
            <span>VOLVER A INICIO</span>
        </Link>  
)}