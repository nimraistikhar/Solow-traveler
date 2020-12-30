import styled from "styled-components";
import FeatureImg from "../../images/adrien-aletti--athdLnCEW8-unsplash.jpg"

export const FeatureContainer =styled.div`
    background: linear-gradient(
        to right, 
        rgba(0, 0, 0, 0.7), 
        rgba(0, 0, 0, 0.1)
    ), url(${FeatureImg});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1 {
        font-size: clamp(2rem, 5vw, 4.5rem);
    }

    p {
        margin-bottom: 1rem;
        font-weight: 400;
        font-size: clamp(.8rem, 3vw, 1.8rem);
    }
`

export const Featurebtn = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #fff;
    color: #293d3d;
    transition: 0.3s ease-out;

    &:hover {
        color: #fff;
        cursor: pointer;
        background-color: #75a3a3;
        transition: 0.3s ease-out;
    }
`