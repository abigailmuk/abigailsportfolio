import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, CopyRightInfo, SocialIcons, SocialIconLink, ImgWrap, Img   } from './FooterElements'
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter  } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import logo from '../../images/portfoliologo.png'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
  return (
    <FooterContainer>
        <FooterWrap> 
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <ImgWrap to='/'>
                        <Img src={logo} alt={logo}/>
                    </ImgWrap>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/login">How it Works</FooterLink>
                            <FooterLink to="/login">Testimonials</FooterLink>
                            <FooterLink to="/login">Careers</FooterLink>
                            <FooterLink to="/login">Terms & Conditions</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/contactus">Contact</FooterLink>
                            <FooterLink to="/contactus">Support</FooterLink>
                            <FooterLink to="/contactus">Email</FooterLink>
                            <FooterLink to="/contactus">Address</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink href="https://linkedin.com" target="_blank" aria-label="Linkedin">LinkedIn</FooterLink>
                            <FooterLink href="https://facebook.com" target="_blank" aria-label="Facebook">Facebook</FooterLink>
                            <FooterLink href="https://instagram.com" target="_blank" aria-label="Instagram">Instagram</FooterLink>
                            <FooterLink href="https://twitter.com" target="_blank" aria-label="Twitter">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>

            </FooterLinksContainer>

            <SocialMedia> 
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={ toggleHome } >Abigail Mukombero</SocialLogo>
                    <CopyRightInfo> © Copyright {new Date().getFullYear()} All Rights Reserved.| Designed and coded by Abigail Amy Mukombero</CopyRightInfo>
                    <SocialIcons>
                        <SocialIconLink href="https://linkedin.com/in/abigail-amy-mukombero" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                        
                        <SocialIconLink href="https://facebook.com/abigailmukombero" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href="https://instagram.com/abigailmukombero" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href="https://twitter.com/abimukombero" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer