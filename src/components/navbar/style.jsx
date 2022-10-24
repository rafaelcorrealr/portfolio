import styled from 'styled-components'

export const Header = styled.div`
    @media(max-width: 425px){
        width:100%;
        height: 60px;
        background-color: var(--color1);

        display:flex;
        justify-content: space-between;
    }
    `
//PhotoHeader é uma opção para mobile, somente mobile.
export const PhotoHeader = styled.div`
    @media(max-width: 425px) {
        color: black;
        display:flex;
        justify-content: baseline;

        img{
            border: 1px black solid; /*Deixado aqui para vizualização.*/
            border-radius: 50px;
            width: 45px;
            height: 45px;
            margin: 10px 0 0 10px ;
        }
    }
    @media(min-width: 426px){
        visibility: hidden;
        opacity: 0;
    }
`

export const Dropdown = styled.a`
    @media(max-width: 425px){
        
    }
`