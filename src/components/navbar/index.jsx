import { Header, PhotoHeader } from "./style"

import photo from "../../img/phototest.jpeg"

const NavBar = () => {
    // const photo = 
    return (
        <>
        <Header>
            <div>
                <PhotoHeader>
                    <img src={photo}/>
                    <h3>Rafael Corrêa</h3>
                </PhotoHeader>
            </div>
        </Header>
        </>
    )
}

export default NavBar

{/* <Header>
<PhotoHeader>
    <span></span>
    <p>Rafael Corrêa</p>
</PhotoHeader>
<ul>
    <a>Box</a>
    <li>
        <ul>
            <li><a href="#0">Sobre</a></li>
            <li>Tecnologias</li>
            <li>Projetos</li>
        </ul>
    </li>
    <li>
        <ul>
            <p>Linkedin</p>
            <p>GitHUB</p>
            <p>WhatsApp</p>
            <p>Instagram</p>
        </ul>
    </li>
</ul>
</Header> */}