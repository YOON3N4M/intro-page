import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 30rem;
`;

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Nav />
      <AppContainer>{children}</AppContainer>
    </>
  );
}
