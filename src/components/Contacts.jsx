// assets



// contexts
import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";

import gmail from '../images/gmail.svg'
import wpp from '../images/wpp.svg'
import insta from '../images/insta.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'

export function Contacts() {
    const { open } = useContext(PortfolioContext)
    return (
        <div id="Contact" className="h-screen w-screen max-w-full bg-zinc-200">
            <div className="divider| h-[2px] w-full  bg-gradient-to-r from-zinc-900 to-zinc-300"></div>
            <div className="container| w-full h-full flex flex-col justify-between">
                <p className="title| ml-20 mt-10 font-bold text-4xl text-zinc-900">Fale comigo</p>
                <div className="buttons| text-xl w-full text-white bg-zinc-600 p-6 flex flex-col gap-10 items-center">
                <div className="flex"><img className="w-7 h-7" src={gmail} alt="" />email</div>
                   <a href="https://wa.me/5581997210434" target="_blank"> <div className="flex"><img className="w-7 h-7" src={wpp} alt="" />whatsapp</div></a>
                    <a href="https://www.instagram.com/deyvid_tavar/" target="_blank"><div className="flex"><img className="w-7 h-7" src={insta} alt="" />instagram</div></a>
                </div>
                <div className="footer| gap-10 justify-center items-center bg-zinc-900 w-full h-16 flex">
                    <a href="https://www.linkedin.com/in/deyvid-tavares-37918b236/" target="_blank"><img className="  w-7 h-7" src={linkedin} alt="" /></a>
                    <a href="https://github.com/DevDeyvidTav" target="_blank" ><img className="w-7 h-7" src={github} alt="" /></a>
                    <a className="text-white font-black text-2xl" href="https://drive.google.com/drive/u/0/folders/1Mk_ZA8aQG_zk7vD1AD3VtV-9DBmO899I" target="_blank">CV</a>
                </div>
            </div>
        </div>
    )
}