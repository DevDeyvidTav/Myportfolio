import { createContext } from "react";

import { useState } from "react"

export const PortfolioContext = createContext({})

export const PortfolioProvider = ({children}) =>{
    const [open, setOpen]  = useState(false)
    return (
        <PortfolioContext.Provider value={{open, setOpen}}>{children}</PortfolioContext.Provider>
    )
}