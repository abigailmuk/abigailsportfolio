import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #272838;
    font-family: 'Roboto', sans-serif;

`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`
export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const ImgWrap = styled(Link)`
    max-width: 555px;
    height: 100%;
    margin: 20px;

`

export const Img = styled.img`
    width: 50%;
    margin: 0 0 10px 0; 
    padding-right: 0; 

    //Resize and Add link to home
`
export const FooterLinkItems = styled.div` 
    display: flex;
    flex-direction: column; 
    align-items: flex-start; 
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;


    @media screen and (max-width: 420px) {
        margin: 0; 
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 16px;
    font-family:'Playfair Display', serif;

`

export const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 18px;
    
    &:hover {
        color: #F19A3E; 
        transition: 0.3s ease-out;

    }

`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;

`

export const SocialMediaWrap = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }

`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 28px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    font-family:'Playfair Display', serif;


`

export const CopyRightInfo = styled.small`
    font-family: Arial;
    color: #fff;
    padding: 5px;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 240px; 

`
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    
`