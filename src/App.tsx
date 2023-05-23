//---- Dependencies
  import { Menu, Header, Footer } from './components/static';
  import { AboutMe, Skills, Projects } from './components';
  

//---- Styles & assets
  import './styles/index.scss'

//------------- AOS Config
  import AOS from "aos"
  import 'aos/dist/aos.css'; 

function App() {

  AOS.init({ once: true })

  return (
    <>
      <Menu />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
