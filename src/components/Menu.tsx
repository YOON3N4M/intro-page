import styled from "styled-components";

const StyledMenu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #3e3e3e;
  z-index: 2000;
  top: 0;
`;

export default function Menu() {
  return <StyledMenu></StyledMenu>;
}
