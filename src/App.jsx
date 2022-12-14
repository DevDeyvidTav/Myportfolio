import { BrowserRouter as Router, Routes, NavLink, Route } from "react-router-dom"

import { Index } from "./pages/Index"
import { Coffeeshop } from "./pages/Coffeeshop"
import { PokemonApi } from "./pages/PokemonApi"
import { DTstore } from "./pages/DTstore"

import { PortfolioContext } from "./contexts/PortfolioContext"
import { useContext, useEffect } from "react"
import { Header } from "./components/Header"
import Aos from "aos"
import 'aos/dist/aos.css'
import GlobalStyles from "./css/GlobalStyles"
import { Finances } from "./pages/Finances"

export function App(props) {
  const { open, setOpen} = useContext(PortfolioContext)
  return (
    <div className="w-screen h-screen max-h-full max-w-full ">
      <GlobalStyles/>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Index  />} />
        <Route path="/coffeeshop" element={<Coffeeshop />}/>
        <Route path="/pokemonapi" element={<PokemonApi />}/>
        <Route path="/dtstore" element={<DTstore />}/>
        <Route path="/finances" element={<Finances/>}/>
      </Routes>
      </Router>

 

    </div>
  )
}
