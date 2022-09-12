

// contexts
import { useContext } from "react"
import { PortfolioContext } from "../contexts/PortfolioContext"

export function Header() {
    const { open, setOpen} = useContext(PortfolioContext)
    scrollTo
    return (
        <div>
            <div className="nav-bar flex mobile:flex-col justify-between fixed shadow-md w-screen ">
                <div className="nav-bar-1| p-2 opacity-90 flex justify-between tablet-m:mx-32
        sm:mx-0 mobile:mx-0">

                    <p  className="font-bold text-3xl  tablet-p:text-4xl">MyPortfolio.</p>
                    <div className=' main md:gap-3 flex gap items-center font-semibold text-zinc-700 '>
                        <div className="hidden tablet-p:flex justify-end space-x-5 ">
                            <a href="/#Home">Home</a>
                            <a href="/#About">Sobre</a>
                            <a href="/#Projetos">Projetos</a>
                            <a href="/#Contact">Contato</a>
                        </div>
                        <button className={`${open ? 'hidden' : ''} tablet-p:hidden text-black`}>
                            <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <button onClick={() => setOpen(!open)} className={`${open ? '' : 'hidden'} -text-black tablet-p:hidden`}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg></button>
                    </div>

                </div>
            </div>
            <div className={`${open ? 'translate-x-0' : '-translate-x-full'} duration-500 flex-col gap-8 h-full w-5/6 rounded-2xl max-w-full  fixed bg-zinc-800 `}>
         
          <div className="text-white flex flex-col h-full items-center justify-center gap-20 text-4xl font-bold">
            <p onClick={() => setOpen(!open)} >Home</p>
            <p onClick={() => setOpen(!open)} >Sobre</ p>
            <p onClick={() => setOpen(!open)} >Habilidades</p>
            <p onClick={() => setOpen(!open)} >Projetos</ p>
            <p onClick={() => setOpen(!open)} >Contatos</p>
          </div>
        </div>
        </div>
    )
}