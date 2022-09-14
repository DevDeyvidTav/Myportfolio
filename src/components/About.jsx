import { TbBrandJavascript } from 'react-icons/Tb';
import { DiReact, DiCss3 } from 'react-icons/Di';
import {SiTailwindcss } from 'react-icons/Si';
import {AiFillHtml5} from 'react-icons/Ai';

export function About() {
    return (
        <div id="About" className=" h-screen w-screen flex flex-col  bg-gray-200 items-center tablet-m:items-start max-w-full">
            <div className="divider| h-px w-full  bg-gradient-to-r from-zinc-900 to-zinc-300"></div>
            <div className="container| mt-32 justify-between flex w-full h-screen ">
                <div className="sobre|">
                    <h1 className="title| font-bold text-4xl ml-20 mb-10 text-zinc-900">Sobre:</h1>
                    <p className="text| ml-20 font-normal text-zinc-700 text-2xl w-96 h-96">Meu nome é Deyvid Tavares, resido em Limoeiro-PE, estudo o desenvolvimento web desde o o começo de 2022. Durante meu aprendizado, desenvolvi técnicas e conhecimentos que me auxiliam a dinamizar a experiência do usuário e, com isso, facilatando o uso do website.</p>
                </div>
                <div className="skills| flex justify-center items-center flex-wrap bg-black w-1/2 rounded-md mr-5 h-96 ">
                    <TbBrandJavascript className='w-16 h-16 shadow text-white'/>
                    <DiReact className='w-16 h-16 text-white'/>
                    <DiCss3 className='w-16 h-16 text-white'/>
                    <SiTailwindcss className='w-16 h-16 text-white'/>
                    <AiFillHtml5 className='w-16 h-16 text-white'/>
                </div>
            </div>
        </div>
    )
}