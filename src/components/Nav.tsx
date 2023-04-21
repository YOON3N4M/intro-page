import { Box, Flex, Button } from "@chakra-ui/react";

export default function Nav() {
  return (
    <>
      <Flex
        w="1024px"
        position="fixed"
        pt="15px"
        justifyContent="right"
        pr="40"
      >
        <Flex fontSize="25" width="300px" justifyContent="space-between">
          <Button>Info</Button>
          <Button>Project</Button>
          <Button>Resume</Button>
        </Flex>
      </Flex>
    </>
  );
}
