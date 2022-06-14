import React from 'react'
import { Image, FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import {FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import  logo  from '../../images/AM-Logo.png'


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="signin">How it works</FooterLink>
                            <FooterLink to="signin">Testimonials</FooterLink>
                            <FooterLink to="signin">Careers</FooterLink>
                            <FooterLink to="signin">Investors</FooterLink>
                            <FooterLink to="signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="signin">How it works</FooterLink>
                            <FooterLink to="signin">Testimonials</FooterLink>
                            <FooterLink to="signin">Careers</FooterLink>
                            <FooterLink to="signin">Investors</FooterLink>
                            <FooterLink to="signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="signin">How it works</FooterLink>
                            <FooterLink to="signin">Testimonials</FooterLink>
                            <FooterLink to="signin">Careers</FooterLink>
                            <FooterLink to="signin">Investors</FooterLink>
                            <FooterLink to="signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="signin">How it works</FooterLink>
                            <FooterLink to="signin">Testimonials</FooterLink>
                            <FooterLink to="signin">Careers</FooterLink>
                            <FooterLink to="signin">Investors</FooterLink>
                            <FooterLink to="signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                        <Image src={logo}/>
                        </SocialLogo>
                        <WebsiteRights>Adam Mansell © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.linkedin.com/in/adammanselll/ " target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="//twitter.com/AdamManselll" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/channel/UCbQVv5RUU8SUDOBx-nF43Fg" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer