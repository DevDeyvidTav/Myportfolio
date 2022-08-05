import { NavLink } from "react-router-dom"
import { Button } from "@material-tailwind/react"

export function NotFound(){
    return(
        <div className="flex flex-col gap-4 items-center justify-center mt-10">
            <p className="tablet-m:font-black text-4xl flex gap-3 items-center justify-center">
                Erro 404  ...  Página não encontrada    <img className="w-20" src="../../assets/error_icon_124063.svg" alt="" />
            </p>
            <NavLink to="/"><Button className="bg-zinc-800 flex items-center justify-center px-10 py-2 rounded-md shadow-md shadow-zinc-800">Voltar</Button></NavLink>
        </div>
    )
}