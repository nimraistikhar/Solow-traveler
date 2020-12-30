import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom'
import { FaPlaneDeparture } from 'react-icons/fa'

export const Nav = styled.nav`
    background: rgb(153, 204, 255, 0.15);
    height: 80px;
    padding: 2rem 2rem;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
`

export const NavLink = styled(Link)`
    color: #fff
`

export const Bars = styled(FaPlaneDeparture)`
    font-size: 2rem;
    transform: translate(-50%, 15%);
    color: #fff;
`

export const NavItems = styled.div`
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        li {
            list-style: none;
            color: #fff;
            font-weight: 400;
            font-size: 1.2rem;
            margin-right: 2.5rem;
            padding: 2px;
            cursor: pointer;
            transition: 0.3s ease-in;

            &:hover {
                border: 1px solid #fff;
            }
        }
    }
`