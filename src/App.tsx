//---- Dependencies
  import { Menu, Header, Footer } from './components/static';
  

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
      <Footer />
    </>
  )
}

export default App
