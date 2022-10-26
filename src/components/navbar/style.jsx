import styled from 'styled-components'

export const Header = styled.div`
    @media(max-width: 425px){
        width:100%;
        height: 60px;
        background-color: var(--color1);
       
        .mobile
        {
            display: flex;
            justify-content: space-between;
            /* align-items: center; */
        }

        .mobile .photoHeader
        {
            color: black;
            display: flex;
            justify-content: baseline;
        }

        .mobile .photoHeader img
        {
            border: #000 1px solid;
            border-radius: 50%;
            width: 45px;
            height: 45px;
            margin: 10px 0 0 10px;
        }

        .mobile .photoHeader h3
        {
            color: #fff;
            margin-left: 5px;
        }

        .mobile .boxDropdown
        {
            width: 45px;
            height: 30px;
            margin: 15px 10px 0 0;
        }

        .mobile .boxDropdown .box
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 100%;

        }
        .mobile .boxDropdown .box .linha
        {
            position: relative;
            display: block;
            height: 2.8px;
            width: 30px;
            background: #fff;
            border-radius: 20px;
        }

    }
    `