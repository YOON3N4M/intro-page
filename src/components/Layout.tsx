import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import Footer from "./Footer";

const AppContainer = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding-top: 30rem;
  min-height: 1500px;
`;

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Nav />
      <AppContainer>{children}</AppContainer>
      <Footer />
    </>
  );
}
