
import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";
import btn from '../images/btn-seta.svg'
import js from '../images/js.svg'
import tailwind from '../images/tailwind.svg'
import react from '../images/react.svg'

import 'aos/dist/aos.css'

import { ButtonHome, ImgHome, TextHome } from "./Animations/Index";

export function Home() {
    const { open, setOpen } = useContext(PortfolioContext)
    return (
        <div id='Home' className="h-screen w-screen flex flex-col tablet-m:flex-row bg-gray-200 items-center tablet-m:items-start max-w-full">
            <div className="ml-5 duration-500 hidden h-24 tablet-m:h-5/6 mt-12 tablet-m:mt-20 w-screen tablet-m:w-3/5 rounded-xl  bg-black tablet-m:flex justify-center items-center">
                <ImgHome>
                    <img className="text-white w-16 h-16  tablet-m:w-32 tablet-m:h-32" src={react} alt="" />
                    <img className="text-white w-16 h-16  tablet-m:w-32 tablet-m:h-32" src={tailwind} alt="" />
                    <img className="bg-white w-16 h-16 rounded-2xl tablet-m:w-32 tablet-m:h-32" src={js} alt="" />
                </ImgHome>
            </div>
            <div className="h-screen tablet-m:w-2/5 flex justify-center mt-20 text-center items-center  flex-col">
                <TextHome>
                    <p className="text-zinc-600 text-2xl tablet-m:text-4xl w-96">
                        olá mundo,
                    </p>
                    <p className="text-zinc-900 text-3xl tablet-m:text-4xl tablet-m:w-96">
                        meu nome é <span className="tablet-m:text-5xl text-4xl">Deyvid Tavares</span>,
                    </p>
                    <p className="text-zinc-400 tablet-m:text-4xl  text-2xl w-96">
                        desenvolvedor front-end react.
                    </p>
                    <a href="https://drive.google.com/drive/u/0/folders/1Mk_ZA8aQG_zk7vD1AD3VtV-9DBmO899I" target="_blank"><p className="text-zinc-600 border mx-auto mt-5 h-10 flex items-center justify-center rounded text-xl hover:bg-zinc-300 hover:duration-300 border-zinc-400 w-32">Currículo</p></a>
                </TextHome>
               <ButtonHome>
                    <a href="/#About"><img className="mt-32 hover:bg-zinc-700 w-12 h-12 rounded-full hover:duration-500" src={btn} alt="" /></a>
               </ButtonHome>
            </div>
        </div>
    )
}