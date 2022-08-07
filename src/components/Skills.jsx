import Html from "../images/file_type_html_icon_130541.svg"
import Css from "../images/file_type_css_icon_130661.svg"
import Js from "../images/javascript_icon_130900.svg"
import React from "../images/react_original_logo_icon_146374.svg"
import Twnd from "../images/file_type_tailwind_icon_130128.svg"
import Wbpak from "../images/webpack_original_logo_icon_146300.svg"
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";



export function Skills() {
    return (
        <div className="flex items-center justify-center w-screen h-3/4">
            <div
                className="flex flex-col items-center justify-center  rounded-md shadow-2xl shadow-zinc-800 w-96 h-5/6">

                    <h2 className="text-4xl text-zinc-800 font-semibold mb-8">Habilidades:</h2>
                <div className="flex items-center justify-center flex-wrap gap-6 ">
                <Menu placement="top">
                    <MenuHandler>
                        <Button variant="gradient"> <img className="w-20" src={Html} alt="" /></Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.</MenuItem>

                    </MenuList>
                </Menu>
                <Menu placement="top">
                    <MenuHandler>
                        <Button variant="gradient"> <img className="w-20" src={Css} alt="" /></Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.</MenuItem>

                    </MenuList>
                </Menu>
                <Menu placement="top">
                    <MenuHandler>
                        <Button variant="gradient"> <img className="w-20" src={Js} alt="" /></Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.</MenuItem>

                    </MenuList>
                </Menu>
                <Menu placement="top">
                    <MenuHandler>
                        <Button variant="gradient"> <img className="w-20" src={React} alt="" /></Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.</MenuItem>

                    </MenuList>
                </Menu>
                <Menu placement="top">
                    <MenuHandler>
                        <Button variant="gradient"> <img className="w-20" src={Twnd} alt="" /></Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Tailwind é um framework CSS que oferece a possibilidade de você criar layouts usando uma estrutura de CSS pronta. Isso permite que você otimize o tempo de criação de uma UI sem precisar fazer tudo manualmente.</MenuItem>

                    </MenuList>
                </Menu>
                <Menu placement="top">
                    <MenuHandler>
                        <Button variant="gradient"> <img className="w-20" src={Wbpak} alt="" /></Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>O Webpack é um empacotador de módulos gratuito e de código aberto para JavaScript. Ele é feito principalmente para JavaScript, mas pode transformar ativos de front-end, como HTML, CSS e imagens, se os carregadores correspondentes forem incluídos.</MenuItem>

                    </MenuList>
                </Menu>
            </div>
                </div>
        </div>
    )
}