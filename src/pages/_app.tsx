import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const theme = {
  styles: {
    global: {
      "html, body": {
        color: "white",
        backgroundColor: "#121212",
      },
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
