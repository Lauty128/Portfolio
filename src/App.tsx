//---- Dependencies
  import { useEffect } from 'react';

//---- Components
  import { Menu, Footer, Header } from './components/static';
  import { MainLayout } from './components';

//---- Styles & assets
  import './styles/index.scss'

//------------- AOS Config
  import AOS from "aos"
  import 'aos/dist/aos.css'; 

function App() {
  //---- States
  useEffect(()=>{
    setTimeout(()=>{
      if(document.querySelector('.Loading')){
        (document.querySelector('.Loading') as HTMLDivElement).remove()
      }
    }, 200)
  }, [])

  //---- AOS
  AOS.init({ once: true })

  return (
    <>
        <Menu />
        <Header />
        <MainLayout />
        <Footer />
    </>
  )
}

export default App
