import styled from "styled-components";
import IconGitHub from "../icons/IconGitHub";
import IconInstagram from "../icons/IconInstagram";
import React from "react";
export const StyledSection = styled.section`
  left: 0;
  right: 0;
  padding: 0 6rem;
  .flex-box {
    display: flex;
  }
  .flex-box > div {
    flex-grow: 1;
  }
  margin-bottom: 20rem;
`;

const StyledH1 = styled.h1`
  font-size: 7rem;
  font-family: "TheJamsil5Bold";

  //background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
  //-webkit-animation: backgroundGradient 10s infinite linear;
  z-index: 0;
`;
const StyledSpan = styled.span<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
`;
const StyledP = styled.p``;
const SocialContainer = styled.div`
  margin-top: 10rem;
  display: flex;

  * {
    margin-right: 20px;
    cursor: pointer;
  }

  svg {
    width: 3rem;
    :hover {
      stroke: #51a7f3;
    }
  }
`;
const StyledPic = styled.img`
  width: 40rem;
  margin-top: -10rem;
  border-radius: 10%;
`;

interface URLT {
  github: string;
  instagram: string;
}
export const URL: URLT = {
  github: "https://github.com/YOON3N4M",
  instagram: "https://www.instagram.com/yoon3nam/",
};
export default function Main() {
  function openNewWindow(event: any) {
    console.log(event);
    //window.open(``, '_blank')}
  }

  return (
    <>
      <StyledSection>
        <div className="flex-box">
          <div>
            <StyledH1>YOON3NAM</StyledH1>
            <StyledSpan fontSize="3rem">
              프론트엔드 개발을 하는 윤세남 입니다.
            </StyledSpan>

            <SocialContainer>
              <a href={URL.github} target="_blank">
                <IconGitHub />
              </a>
              <a href={URL.instagram} target="_blank">
                <IconInstagram />
              </a>
            </SocialContainer>
          </div>
          <div>
            {/* 
            <StyledPic src="me.jpeg" />
            */}
          </div>
        </div>
      </StyledSection>
    </>
  );
}
