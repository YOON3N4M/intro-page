import React, { useState } from "react";
import Nav from "./Nav";
import styled from "styled-components";
import Footer from "./Footer";
import Menu from "./Menu";
import { AnimatePresence, motion } from "framer-motion";

const AppContainer = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding-top: 30rem;
  min-height: 1500px;
`;
const MenuContainer = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  // background-color: red;
  z-index: 2000;
  top: 0;
  left: 0;
`;

export function Layout({ children }: React.PropsWithChildren) {
  const [isMenuOn, setIsMenuOn] = useState(false);
  return (
    <>
      <AnimatePresence>
        {isMenuOn ? (
          <MenuContainer
            initial={{ x: -1500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -2000, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            key="menu"
          >
            <Menu />
          </MenuContainer>
        ) : null}
      </AnimatePresence>

      <Nav setIsMenuOn={setIsMenuOn} />
      <AppContainer>{children}</AppContainer>
      <Footer />
    </>
  );
}
