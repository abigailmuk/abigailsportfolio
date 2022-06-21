import React, { useState } from 'react'
import Video from '../../videos/portfoliobackground.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight  } from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false) 

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
        <HeroContainer id='home'>
            <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='portfoliobackground/mp4'/>
            </HeroBg>
            <HeroContent> 
              <HeroH1>Abigail Amy Mukombero</HeroH1>
              <HeroP>
               Multimedia Designer | Web Developer | Illustrator
              </HeroP>
              <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true'
                dark='true'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true'
                 offset={-80}>
                  Find Out More{hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    </>
  )
}

export default HeroSection
