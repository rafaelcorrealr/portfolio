import styled from 'styled-components'

export const Header = styled.nav`
    @media(max-width: 425px){
        width:100%;
        height: 60px;
        background-color: #538DBF;

        display:flex;
        justify-content: space-between;
    }
    `

export const PhotoHeader = styled.div`
    @media(max-width: 425px) {
        color: black;
        display:flex;
        justify-content: baseline;

        span{
            border: 1px black solid;
            border-radius: 50px;
            width: 45px;
            height: 45px;
        }
    }
    @media(min-width: 426px){
        visibility: hidden;

    }
`