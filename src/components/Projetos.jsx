import dtstore from '../images/dtstore.png'
import pokedex from '../images/pokedex.png'
import coffeeshop from '../images/coffeeshop.png'
import imc from '../images/imc.png'
import { useContext } from 'react'
import { PortfolioContext } from '../contexts/PortfolioContext'

    export function Projetos(){
        const { open } = useContext(PortfolioContext)
        return(
           <div className=" w-screen max-w-full  bg-zinc-200">
                
                <div className={`${open ? 'translate-x-full' : 'translate-x-0' } projetos-area| duration-500 flex-wrap flex justify-center items-center mt-10 gap-10`}>
                    <div className="dtstore| w-72 h-44">
                        <img className='w-72 absolute h-44 rounded-md' src={dtstore} alt="" />
                        <div className="info-dtstore| flex justify-center items-center relative rounded-md opacity-0 hover:opacity-70 bg-black w-full h-full">
                            <button className='opacity-100 text-black font-extrabold rounded-full p-2 bg-white'>Informações</button>
                        </div>
                    </div>
                    <div className="pokedex| w-72 h-44">
                        <img className='w-72 absolute h-44 rounded-md' src={pokedex} alt="" />
                        <div className="info| flex justify-center items-center relative rounded-md opacity-0 hover:opacity-70 bg-black w-full h-full">
                            <button className='opacity-100 text-black font-extrabold rounded-full p-2 bg-white'>Informações</button>
                        </div>
                    </div>
                    <div className="coffeshop| w-72 h-44">
                        <img className='w-72 absolute h-44 rounded-md' src={coffeeshop} alt="" />
                        <div className="info| flex justify-center items-center relative rounded-md opacity-0 hover:opacity-70 bg-black w-full h-full">
                            <button className='opacity-100 text-black font-extrabold rounded-full p-2 bg-white'>Informações</button>
                        </div>
                    </div>
                    <div className="imc| w-72 h-44">
                        <img className='w-72 absolute h-44 rounded-md' src={imc} alt="" />
                        <div className="info-dtstore| flex justify-center items-center relative rounded-md opacity-0 hover:opacity-70 bg-black w-full h-full">
                            <button className='opacity-100 text-black font-extrabold rounded-full p-2 bg-white'>Informações</button>
                        </div>
                    </div><div className="dtstore| w-72 h-44">
                        <img className='w-72 absolute h-44 rounded-md' src={dtstore} alt="" />
                        <div className="info-dtstore| flex justify-center items-center relative rounded-md opacity-0 hover:opacity-70 bg-black w-full h-full">
                            <button className='opacity-100 text-black font-extrabold rounded-full p-2 bg-white'>Informações</button>
                        </div>
                    </div>








                </div>
           </div>
        )
    }