import { Fragment } from "react";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from "@material-tailwind/react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { Home } from "./Home";
import { Skills } from "./Skills";


export function MobileNav() {

    return (
        <div className="tablet-p:hidden mr-4">
                <Fragment>
                    <Popover placement="left-start">
                        <PopoverHandler>
                            <Button variant="gradient"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg></Button>
                        </PopoverHandler>
                        <PopoverContent className="bg-white w-5/6 h-3/4 flex flex-col rounded-md items-center justify-center space-y-14 text-3xl text-zinc-700">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/About">Sobre</NavLink>
                            <NavLink to="/Projetos">Projetos</NavLink>
                            <NavLink to="/Skills">Habilidades</NavLink>
                            <NavLink to="/Contacts">Contato</NavLink>

                        </PopoverContent>
                    </Popover>
                </Fragment>


        </div>
    )
}