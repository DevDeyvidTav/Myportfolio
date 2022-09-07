import { Button } from "@material-tailwind/react";
import Img from "../images/img.png"

export function Home() {
    return (
        <div className=" container| flex flex-col tablet-m:flex-row bg-zinc-200 w-screen m max-w-full ">
            <div className="tablet-m:w-3/5 w-screen ">
                <img src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="mt-2 rounded-lg w-full h-[45vw]" />
            </div>
            <div className="apresentation-home| flex flex-col tablet-m:w-2/5 w-screen justify-center mt-20 tablet-m:mt-0 items-center ">
                <p className="text-2xl text-zinc-700">Olá mundo, Meu nome é</p>
                <p className="text-4xl font-semibold">Deyvid Tavares</p>
                <p className="text-md text-semibold text-zinc-400">e esta é a pagina de divulgação do meu trabalho </p>
                <a href="https://github.com/DevDeyvidTav" target='_blank'> <Button variant="gradient" className="mt-4 shadow-md shadow-black bg-zinc-800 p-2 rounded-sm text-white">Veja meu trabalho</Button></a>
            </div>
        </div>
    )
}