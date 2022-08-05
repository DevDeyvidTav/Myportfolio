import { Button } from "@material-tailwind/react";

export function Home() {
    return (
        <div className="mt-20 tablet-m:mt-0 container| font-sans gap-16 flex flex-col tablet-m:flex-row items-center justify-center w-screen h-3/4 tablet-m:gap-56">
            <div className="apresentation-home| flex flex-col items-center justify-center ">
                <p className="text-2xl text-zinc-700">Olá mundo, Meu nome é</p>
                <p className="text-4xl font-semibold">Deyvid Tavares</p>
                <p className="text-md text-semibold text-zinc-400">e esta é a pagina de divulgação do meu trabalho </p>
                <a href="https://github.com/DevDeyvidTav"> <Button variant="gradient" className="mt-4 shadow-md shadow-black bg-zinc-800 p-2 rounded-sm text-white">Veja meu trabalho</Button></a>
            </div>
            <div className="flex tablet-m:w-1/5 tablet-m:h-5/6 h-4/5 w-96 items-center justify-center">
                <img src="../../assets/img.png" alt="" className=" w-ful h-full" />
            </div>
        </div>
    )
}