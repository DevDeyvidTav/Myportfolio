import { Button } from "@material-tailwind/react"
import {
    Popover,
    PopoverHandler,
    PopoverContent,
} 
from "@material-tailwind/react";



export function Contacts() {
    return (
        <div className="flex flex-col gap-10 items-center justify-center w-screen h-3/4">
            <div className="shadow-2xl shadow-zinc-800  w-4/5 tablet-m:w-96 h-4/5 py-20 flex flex-col items-center gap-10 rounded-md ">
                <div>
                    <a href="https://www.linkedin.com/in/deyvid-tavares-37918b236/"><Button className="bg-zinc-800 rounded-md px-10 py-2 flex items-center"><img className="w-7 mr-3" src="../../images/linkedin_black_logo_icon_147114.svg" alt="" />  LinkedIn!!</Button></a>
                </div>
                <div>
                    <Popover placement="right-start">
                        <PopoverHandler>
                            <Button className="bg-zinc-800 rounded-md px-10 py-2 flex items-center" variant="gradient"> <img className="w-7 mr-3" src="../../images/phone-symbol-of-an-auricular-inside-a-circle_icon-icons.com_56478.svg" alt="" />  Telefone</Button>
                        </PopoverHandler>
                        <PopoverContent>
                            <span>(81)997210434</span>
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <a href="https://wa.me/5581997210434"><Button className="bg-zinc-800 rounded-md px-10 py-2 flex items-center"><img className="w-7 mr-3" src="../../images/whatsapp-logo_icon-icons.com_57054.svg" alt="" /> WhatsApp!!</Button></a>
                </div>
                <div>
                <Popover placement="right-start">
                        <PopoverHandler>
                            <Button className="bg-zinc-800 rounded-md px-10 py-2 flex items-center" variant="gradient"> <img className="w-7 mr-3" src="../../images/opened-email-envelope_icon-icons.com_70656.svg" alt="" />  E-mail</Button>
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