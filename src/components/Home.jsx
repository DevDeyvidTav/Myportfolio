
import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";
import btn from '../images/btn-seta.svg'
import { DiReact, DiJavascript1 } from 'react-icons/Di';
import { SiTailwindcss } from 'react-icons/Si';

export function Home() {
    const { open, setOpen } = useContext(PortfolioContext)
    return (
        <div id='Home' className="h-screen w-screen flex flex-col tablet-m:flex-row bg-gray-200 items-center tablet-m:items-start max-w-full">
            <div className={`${open ? 'hidden':''} duration-500 h-24 tablet-m:h-5/6 mt-12 tablet-m:mt-20 w-screen tablet-m:w-3/5 rounded-xl  bg-black flex justify-center items-center`}>
                <DiReact className="text-white w-32 h-32"/>
                <SiTailwindcss className="text-white w-32 h-32"/>
                <DiJavascript1 className="text-white w-32 h-32"/>
            </div> 
            <div className="h-screen tablet-md:w-2/5 flex justify-center mt-20 text-center items-center flex-col">
                <p className="text-zinc-600 text-2xl tablet-m:text-4xl w-96">
                    olá mundo,
                </p>
                <p className="text-zinc-900 text-3xl tablet-m:text-4xl tablet-m:w-96">
                    meu nome é <span className="tablet-m:text-5xl text-4xl">Deyvid Tavares</span>,
                </p>
                <p className="text-zinc-400 tablet-m:text-4xl  text-2xl w-96">
                    desenvolvedor front-end react.
                </p>
                <a href="/#About"><img className="mt-32 hover:bg-zinc-700 w-12 h-12 rounded-full hover:duration-500" src={btn} alt="" /></a>
            </div>
        </div>
    )
}