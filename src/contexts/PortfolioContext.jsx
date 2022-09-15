import { createContext } from "react";

import { useState } from "react"

export const PortfolioContext = createContext({})

export const PortfolioProvider = ({children}) =>{
    const  [skill, setSkill] = useState('clique no icone para mais informações')
    const [open, setOpen]  = useState(false)
    return (
        <PortfolioContext.Provider value={{open, setOpen, skill, setSkill}}>{children}</PortfolioContext.Provider>
    )
}