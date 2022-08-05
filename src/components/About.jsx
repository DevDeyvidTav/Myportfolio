import { Button } from "@material-tailwind/react"
import { NavLink } from "react-router-dom"

export function About() {
    return (
        <div className="flex flex-col  items-center justify-center mt-7 gap-20 w-screen h-3/4">
            <div className="flex items-center justify-center flex-col tablet-m:flex-row  gap-32">
                
                <p className="w-96  font-semibold text-zinc-500 text-xl shadow-2xl p-10 shadow-zinc-800"> Tenho 20 anos, nascido em Limoeiro-Pe, brasileiro, ensino medio completo,
                    estudo desenvolvimeto front-end desde fevereiro de 2022, tenho como objetivo me tornar um front-end capaz de resolver qualquer
                    problema e dividir meus conhecimentos com o mundo.
                </p>
                <img className="w-96 h-80 rounded-md shadow-2xl hidden tablet-m:flex shadow-zinc-800" src="https://media.istockphoto.com/photos/digitally-enhanced-shot-of-multiple-lines-of-computer-code-picture-id1322201622?b=1&k=20&m=1322201622&s=170667a&w=0&h=ZdOe-5JcnQagMDBhhi1hI-zdHsXKTgTdLjGKfyhf8Ts=" alt="" />
            </div>
            <NavLink to="/Projetos"><Button className="bg-zinc-800 shadow-md shadow-black p-2 font-bold text-2xl rounded-md px-10">Veja o que já fiz</Button></NavLink>
        </div>
    )
}