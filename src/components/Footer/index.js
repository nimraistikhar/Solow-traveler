import React from 'react'
import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa'
import {
    FooterContainer, 
    FooterWrap,
    SocialMediaWrap, 
    SocialIconLink
} from './FooterElement'

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                    <SocialMediaWrap>

                        <SocialIconLink href="/" target="_blank" arial-label="Facebook" rel="noopener" >
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" arial-label="Instagram" rel="noopener" >
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" arial-label="Youtube" rel="noopener" >
                            <FaYoutube />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" arial-label="Twitter" rel="noopener" >
                            <FaTwitter />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" arial-label="Linkedin" rel="noopener" >
                            <FaLinkedin />
                        </SocialIconLink>

                    </SocialMediaWrap>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
