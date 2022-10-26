import { Header } from "./style"

import phototest from "../../img/phototest.jpeg"

const NavBar = () => {
    // const photo = 
    // const show = (a) => {
    //     document.querySelector("boxDropdown").value = a
    // }

    return (
        <>
        <Header>
            <div className="mobile">
                <div className="photoHeader">
                    <img src={phototest} alt="foto"/>
                    <h3>Rafael Corrêa</h3>
                </div>
                <div className="boxDropdown">
                    <div className="box">
                        <span className="linha"></span>
                        <span className="linha"></span>
                        <span className="linha"></span>
                    </div>
                    <div className="dropdown">
                        <ul>
                            <li>Sobre</li>
                            <li>Tecnologias</li>
                            <li>Projetos</li>
                            <li>Contatos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Header>
        </>
    )
}

export default NavBar