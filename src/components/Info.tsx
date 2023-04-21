import { Box, Flex } from "@chakra-ui/react";

export default function Info() {
  return (
    <>
      <Flex>
        <Flex
          mt="150px"
          w="700px"
          h="400px"
          backgroundColor="#404040"
          borderRadius="8px"
        >
          <Flex
            w="100%"
            h="30px"
            borderTopLeftRadius="8px"
            borderTopRightRadius="8px"
            backgroundColor="#262626"
            alignItems="center"
          >
            <Box
              w="12px"
              h="12px"
              backgroundColor="#FD5F57"
              borderRadius="50%"
              ml="15px"
            ></Box>
            <Box
              w="12px"
              h="12px"
              backgroundColor="#FEBC2E"
              borderRadius="50%"
              ml="10px"
            ></Box>
            <Box
              w="12px"
              h="12px"
              backgroundColor="#24C840"
              borderRadius="50%"
              ml="10px"
            ></Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
