import styled from "styled-components";
import ImgBg from "../../images/mickey-o-neil-xL66l--msXU-unsplash.jpg"

export const HeroContainer = styled.h1`
    background: linear-gradient(
        to bottom, 
        rgba(0, 0, 0, 0.8), 
        rgba(0, 0, 0, 0.7)
        ), url(${ImgBg});
        height: 100vh;
        background-position: center;
        background-size: cover;
`

export const HeroContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) / 2);
`

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    line-height: 1;
    font-weight:400;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

export const HeroH1 = styled.h1`
    font-size: clamp(2rem, 10vh, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #669999;
    letter-spacing: 3px;
    padding: 5px 10px;
`

export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5vh,3rem);
    margin-bottom: 2rem;
`

export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #fff;
    color: #293d3d;
    transition: 0.3s ease-out;

    &:hover {
        background-color: #75a3a3;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #fff;
    }
`