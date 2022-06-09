import React, {useState} from 'react'
import { Button } from '../ButtonElement'
import Video from '../../videos/Ocean-home.mp4'
import { ArrowForward, ArrowRight, HomeBg, HomeBtnWrapper, HomeContainer, HomeContent, HomeH1, HomeP, VideoBg } from './HomeElements'

const HomeSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

  return (
    <HomeContainer>
        <HomeBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HomeBg>
        <HomeContent>
            <HomeH1>I'm Adam Mansell</HomeH1>
            <HomeP>
                A Frontend focused Web Developer building the Frontend of Websites and Web
                 Applications that leads to the success of the overall product
            </HomeP>
            <HomeBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HomeBtnWrapper>
        </HomeContent>
        
    </HomeContainer>
  )
}

export default HomeSection