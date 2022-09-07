import { Button } from "@material-tailwind/react"
import {
    Popover,
    PopoverHandler,
    PopoverContent,
} 
from "@material-tailwind/react";
import Phone from "../images/phone-symbol-of-an-auricular-inside-a-circle_icon-icons.com_56478.svg"
import Wpp from "../images/whatsapp-logo_icon-icons.com_57054.svg"
import Lkdin from "../images/linkedin_black_logo_icon_147114.svg"
import Email from "../images/opened-email-envelope_icon-icons.com_70656.svg"
import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";





export function Contacts() {
    const { open } = useContext(PortfolioContext)
    return (
        <div className={`${open ? "translate-x-full" : "translate-x-0"} duration-500 flex flex-col gap-10 items-center justify-center w-screen h-3/4`}>
            <div className="shadow-2xl shadow-zinc-800  w-4/5 tablet-m:w-96 h-4/5 py-20 flex flex-col items-center gap-10 rounded-md ">
                <div>
                    <a href="https://www.linkedin.com/in/deyvid-tavares-37918b236/"><Button className="bg-zinc-800 rounded-md px-10 py-2 flex items-center"><img className="w-7 mr-3" src={Lkdin} alt="" />  LinkedIn!!</Button></a>
                </div>
                <div>
                    <Popover placement="bottom">
                        <PopoverHandler>
                            <Button className="bg-zinc-800 rounded-md px-10 py-2 flex items-center" variant="gradient"> <img className="w-7 mr-3" src={Phone} alt="" />  Telefone</Button>
                        </PopoverHandler>
                        <PopoverContent>
                            <span>(81)997210434</span>
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <a href="https://wa.me/5581997210434"><Button className="bg-zinc-800 rounded-md px-10 py-2 flex items-center"><img className="w-7 mr-3" src={Wpp} alt="" /> WhatsApp!!</Button></a>
                </div>
                <div>
                <Popover placement="bottom">
                        <PopoverHandler>
                            <Button className="bg-zinc-800 rounded-md px-10 py-2 flex items-center" variant="gradient"> <img className="w-7 mr-3" src={Email} alt="" />  E-mail</Button>
                        </PopoverHandler>
                        <PopoverContent>
                            <span>devdeyvid2022@gmail.com</span>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    )
}