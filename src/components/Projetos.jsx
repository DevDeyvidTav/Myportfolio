
import { useContext } from 'react'
import { PortfolioContext } from '../contexts/PortfolioContext'
import { NavLink } from 'react-router-dom';




import coffeshop from '../images/coffeeshop.png'
import pokemon from '../images/pokemon.png'
import dtstore from '../images/dtstore.png'

    export function Projetos(){
        const { open } = useContext(PortfolioContext)
        return(
            <div id='Projetos' className="tablet-m:h-screen w-screen max-w-full bg-gray-200 ">
                <div className="container| w-full tablet-m:h-full">
                <div className="divider| h-[1.2px] w-full  bg-gradient-to-l from-zinc-900 mb-24 to-zinc-300"></div>
                    <h1 className='title| ml-20 text-4xl font-bold text-zinc-900'>Projetos:</h1>
                    <div className='projects| flex flex-col w-full tablet-m:flex-row tablet-m:h-72 gap-20 tablet-m: mb-10 mt-16 ' >
                        <div className='project1| tablet-m:w-[30%] mx-5 shadow-2xl rounded-md h-full bg-black'><img className='w-full h-full rounded-md rounded-b-none' src={coffeshop} alt="" /><NavLink to="/coffeeshop" ><button className='bg-black rounded-md rounded-t-none text-white w-full text-2xl'>Informações</button></NavLink> </div>
                        <div className='project2| tablet-m:w-[30%] mx-5 shadow-2xl rounded-md h-full bg-black'><img className='w-full h-full rounded-md rounded-b-none' src={pokemon} alt="" /><NavLink to="/pokemonapi"><button className='bg-black rounded-md rounded-t-none text-white w-full text-2xl'>Informações</button></NavLink></div>
                        <div className='project3| tablet-m:w-[30%] mx-5 shadow-2xl rounded-md h-full bg-black'><img className='w-full h-full rounded-md rounded-b-none' src={dtstore} alt="" /><NavLink to="/dtstore"><button className='bg-black rounded-md rounded-t-none text-white w-full text-2xl'>Informações</button></NavLink></div>
                    </div>
                </div>
            </div>
        )
    }