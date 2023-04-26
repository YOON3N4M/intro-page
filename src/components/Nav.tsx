import { motion } from "framer-motion";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  background-color: rgba(42, 43, 56, 0.5);
  position: fixed;
  padding: 2rem 4rem;
  width: 50%;
  margin: 0 auto;
  left: 0;
  right: 0;
  margin-top: 2rem;
  border-radius: 2rem;
  justify-content: space-between;
  border: 0.2rem solid #2a2b37;
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const StyledLogo = styled.div`
  font-size: 3rem;
  letter-spacing: 0px;
`;

export default function Nav() {
  return (
    <>
      <StyledNav>
        <StyledLogo>YOON3NAM</StyledLogo>
        <StyledLogo>MENU</StyledLogo>
      </StyledNav>
    </>
  );
}
