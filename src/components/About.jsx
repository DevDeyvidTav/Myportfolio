import js from '../images/js.svg'
import tailwind from '../images/tailwind.svg'
import html from '../images/html.svg'
import react from '../images/react.svg'
import css from '../images/css.svg'
import { useContext } from 'react';
import { PortfolioContext } from '../contexts/PortfolioContext';

export function About() {
    const { skill, setSkill} = useContext(PortfolioContext)
    return (
        <div id="About" className=" tablet-m:h-screen w-screen flex flex-col  bg-gray-200 items-center tablet-m:items-start max-w-full">
            <div className="divider| h-[2px] w-full  bg-gradient-to-r from-zinc-900 to-zinc-300"></div>
            <div className="container| mt-32 tablet-m:justify-between items-center flex flex-col tablet-m:flex-row w-full tablet-m:h-screen ">
                <div className="sobre|">
                    <h1 className="title| ml-10 font-bold text-4xl tablet-m:ml-20 mb-10 text-zinc-900">Sobre:</h1>
                    <p className="text| ml-10 tablet-m:ml-20 font-normal text-zinc-700 text-2xl tablet-m:w-96 w-[80%]  h-96">Meu nome é Deyvid Tavares, resido em Limoeiro-PE, estudo o desenvolvimento web desde o o começo de 2022. Durante meu aprendizado, desenvolvi técnicas e conhecimentos que me auxiliam a dinamizar a experiência do usuário e, com isso, facilatando o uso do website.</p>
                </div>
                <div className="skills| flex justify-center items-center gap-3 flex-wrap bg-black w-[90%] tablet-m:w-1/2 rounded-md tablet-m:mr-5 mt-20 mb-20 h-56 tablet-m:h-96 ">
                    <img className='w-16 h-16 rounded-xl bg-white' src={js} alt="" />
                    <img className='w-16 h-16' src={react} alt="" />
                    <img className='w-16 h-16' src={css} alt="" />
                    <img className='w-16 h-16' src={tailwind} alt="" />
                    <img className='w-16 h-16' src={html} alt="" />


                </div>

            </div>
        </div>
    )
}