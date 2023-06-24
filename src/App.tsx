//---- Dependencies
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import { useEffect } from 'react';

//---- Components
  import { Menu, Footer, Header } from './components/static';
  import { MainLayout, BlogLayout } from './components';
  

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
      <BrowserRouter>
          <Menu />
          <Header />
          <Routes>
            <Route path='/' element={<MainLayout />} />
            <Route path='/blog' element={<BlogLayout />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
