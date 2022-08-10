import { BrowserRouter as Router, Routes, NavLink, Route } from "react-router-dom"

import { Home } from "./components/Home"
import { About } from "./components/About"
import { Contacts } from "./components/Contacts"
import { Projetos } from "./components/Projetos"
import { NotFound } from "./components/NotFound"
import { Skills } from "./components/Skills"
import { useState } from "react"

export function App(props) {
  const [open, setOpen] = useState(true)
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
              <button className="tablet-p:hidden">
                <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
        <div className={`${open ? 'hidden' : 'flex'} flex-col gap-8 h-full w-screen absolute bg-zinc-800 `}>
          <button onClick={() => setOpen(!open)} className="w-10 text-white h-10"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg></button>
          <div className="text-white flex flex-col w-full h-full items-center justify-center gap-20 text-4xl font-bold">
            <NavLink onClick={() => setOpen(!open)} to='/'>Home</NavLink>
            <NavLink onClick={() => setOpen(!open)} to='/About'>Sobre</NavLink>
            <NavLink onClick={() => setOpen(!open)} to='/Skills'>Habilidades</NavLink>
            <NavLink onClick={() => setOpen(!open)} to='/Projetos'>Projetos</NavLink>
            <NavLink onClick={() => setOpen(!open)} to='/Contacts'>Contatos</NavLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Projetos" element={<Projetos />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>


      </Router>

    </div>
  )
}
