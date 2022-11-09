import React from "react";
import { InfoWraper, InfoContainer, Column1, TextWraper, TopLine, Heading, Subtitle, BtnWrap, InfoRow } from './InfoElements'
import { Button } from '../ButtonElements';


const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWraper>
                    <InfoRow>
                        <Column1>
                            <TextWraper>
                                <TopLine>
                                    TopLine
                                </TopLine>
                                <Heading>
                                    Heading
                                </Heading>
                                <Subtitle>
                                    Subtitle
                                </Subtitle>
                                <BtnWrap>
                                    <Button to='home' />
                                </BtnWrap>
                            </TextWraper>
                        </Column1>
                    </InfoRow>
                </InfoWraper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;