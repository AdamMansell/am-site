import React, { useState } from 'react'
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
                    A Full Stack Web Developer looking to broaden a Career in Creation
                </HomeP>
                <HomeBtnWrapper>
                    <Button
                        to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'>
                        Dive In! {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HomeBtnWrapper>
            </HomeContent>

        </HomeContainer>
    )
}

export default HomeSection