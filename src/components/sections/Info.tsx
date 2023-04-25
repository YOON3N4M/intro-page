import styled from "styled-components";

const StyledSection = styled.section`
  left: 0;
  right: 0;
  padding: 0 6rem;
`;
const StyledH1 = styled.h1`
  font-size: 7rem;

  font-family: "TheJamsil5Bold";
`;
const StyledSpan = styled.span<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
`;
const StyledP = styled.p``;

export default function Main() {
  return (
    <>
      <StyledSection>
        <StyledH1>YOON3NAM</StyledH1>
        <StyledSpan fontSize="3rem">
          프론트엔드 개발을 하는 윤세남 입니다.
        </StyledSpan>
        <StyledP>Typescript, React, Firebase 등의 기술 </StyledP>
      </StyledSection>
    </>
  );
}
