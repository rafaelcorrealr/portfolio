import { Header } from "./style"

import phototest from "../../img/phototest.jpeg"
import { useState } from "react"

const NavBar = () => {
    // const photo = 
    // const show = (a) => {
    //     document.querySelector("boxDropdown").value = a
    // }
    const [menu, setMenu] = useState(false)

    const visibleClick = () => {
        if(menu){
            setMenu(false)
        }else{
            setMenu(true)
        }
    }
    return (
        <>
        <Header>
            <div className="mobile">
                <div className="photoHeader">
                    <img src={phototest} alt="foto"/>
                    <h3>Rafael Corrêa</h3>
                </div>
                <div className="boxDropdown" >
                    <button className="box" onClick={() => visibleClick()}>
                        <span className="linha"></span>
                        <span className="linha"></span>
                        <span className="linha"></span>
                    </button>
                    {menu ? 
                    <ul className="dropdown">
                            <li>Sobre</li>
                            <li>Tecnologias</li>
                            <li>Projetos</li>
                            <li>Contatos</li>
                    </ul>
                    : ""}
                </div>
            </div>
        </Header>
        </>
    )
}

export default NavBar