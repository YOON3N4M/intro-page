import React from "react";
import { Box } from "@chakra-ui/react";
import Nav from "./Nav";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Box margin="0 auto" maxW="1024px" minH="400px">
        <Nav />
        {children}
      </Box>
    </>
  );
}
