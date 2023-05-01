import styled from "styled-components";
import IconGitHub from "./icons/IconGitHub";
import IconInstagram from "./icons/IconInstagram";
import { URL } from "./sections/Info";

const FooterDiv = styled.div`
  height: 10rem;
  border-top: 1px solid #8a8a8a75;
  display: flex;
  align-items: center;
  padding: 0 5rem;
  justify-content: space-between;
  a > svg {
    cursor: pointer;
    width: 3rem;
    stroke: white;
    margin-right: 2rem;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterDiv>
        <h1>YOON3NAM</h1>
        <div>
          <a href={URL.github} target="_blank">
            <IconGitHub />
          </a>
          <a href={URL.instagram} target="_blank">
            <IconInstagram />
          </a>
        </div>
      </FooterDiv>
    </>
  );
}
