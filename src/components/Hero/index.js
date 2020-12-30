import React from 'react'
import Navbar from '../Navbar'
import { 
    HeroContainer, 
    HeroContent, HeroItems, 
    HeroH1, 
    HeroP, 
    HeroBtn 
} from './HeroElements'

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Solo Traveler</HeroH1>
                    <HeroP>Out of this world</HeroP>
                    <HeroBtn>Booking Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
