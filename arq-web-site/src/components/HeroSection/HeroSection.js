import React, { useState } from "react";
import { HeroBg, HeroContainer, VideoBg, ArrowForward, ArrowRight, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from "./HeroElements";
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Virtual</HeroH1>
                <HeroP>
                    Contact us
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover} 
                        primary='true'
                        dark='true'>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}


export default HeroSection;