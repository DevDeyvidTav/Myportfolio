import { BrowserRouter as Router, Routes, NavLink, Route } from "react-router-dom"

import { Home } from "./components/Home"
import { About } from "./components/About"
import { Contacts } from "./components/Contacts"
import { Projetos } from "./components/Projetos"



import { PortfolioContext } from "./contexts/PortfolioContext"
import { useContext } from "react"
import { Header } from "./components/Header"

export function App(props) {
  const { open, setOpen} = useContext(PortfolioContext)
  return (
    <div className="w-screen h-screen max-h-full max-w-full ">
      <Header/>
      <Home/>
      <About/>
      <Projetos/>
      <Contacts/>


 

    </div>
  )
}
