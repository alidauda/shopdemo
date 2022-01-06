import { BellIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import * as React from "react";
import { BannerLink } from "./BannerLink";
import NextLink from "next/link";

export default function Header() {
  return (
    <Box as="section" maxW="100%" w="100%" pos="fixed">
      <Stack
        direction={{
          base: "column",
          sm: "row",
        }}
        justifyContent="center"
        alignItems="center"
        py="3"
        px={{
          base: "3",
          md: "6",
          lg: "8",
        }}
        color="white"
        bg={useColorModeValue("blue.600", "blue.400")}
      >
        <HStack spacing="3">
     {/* <Icon as={BellIcon} fontSize="2xl" h="10" /> */}
          <Text fontWeight="medium" marginEnd="2">
        Thank you for shopping with us click on this button to checkout
            
          </Text>
        </HStack>{" "}
        
           
            <Box
              w={{
                base: "full",
                sm: "auto",
              }}
              flexShrink={0}
              
    px="4"
    py="1.5"
    textAlign="center"
    borderWidth="1px"
    borderColor="whiteAlpha.400"
    fontWeight="medium"
    rounded="base"
    _hover={{
      bg: 'whiteAlpha.200',
    }}

            >
              
              <NextLink href="/cart">
                <Link my="auto">Proceed to Checkout</Link>
                </NextLink>
            
            </Box>
            
            
        
      </Stack>
    </Box>
  );
}
