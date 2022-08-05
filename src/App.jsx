import { BrowserRouter as Router, Routes, NavLink, Route } from "react-router-dom"
import { MobileNav } from "./components/MobileNav"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Contacts } from "./components/Contacts"
import { Projetos } from "./components/Projetos"
import { NotFound } from "./components/NotFound"

export function App(props) {
  return (
    <div className="w-screen h-screen bg-zinc-200 font-sans ">
       

      <Router>
        <div className="nav-bar flex mobile:flex-col  ">
          <div className="nav-bar-1| flex justify-between tablet-m:mx-32
        sm:mx-0 mobile:mx-0">

            <NavLink to='/' className="font-bold text-5xl tablet-p:text-6xl">MyPortfolio.</NavLink>
            <div className=' main md:gap-3 flex gap items-center font-semibold text-zinc-700 '>
              <div className="hidden tablet-p:flex justify-end space-x-5 ">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/About'>Sobre</NavLink>
                <NavLink to='/Projetos'>Projetos</NavLink>
                <NavLink to='/Contacts'>Contatos</NavLink>
                
              </div>
              <MobileNav />
            </div>
            
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contacts" element={<Contacts/>} />
          <Route path="/Projetos" element={<Projetos/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>


      </Router>
      
    </div>
  )
}
