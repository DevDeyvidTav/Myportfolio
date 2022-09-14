
import { useContext } from 'react'
import { PortfolioContext } from '../contexts/PortfolioContext'

    export function Projetos(){
        const { open } = useContext(PortfolioContext)
        return(
            <div id='Projetos' className="h-screen w-screen max-w-full bg-green-600">
            
            </div>
        )
    }