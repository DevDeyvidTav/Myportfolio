// components
import { Home } from "../components/Home"
import { About } from "../components/About"
import { Projetos } from "../components/Projetos"
import { Contacts } from "../components/Contacts"




export function Index() {
    return (
        <div className="w-screen h-screen max-h-full max-w-full">
            <Home />
            <About />
            <Projetos />
            <Contacts />
        </div>
    )
}