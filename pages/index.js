import React from "react";

import { Box ,Flex,SimpleGrid } from "@chakra-ui/react";

import Header from "../components/Header";
import BoDy from "../components/Body";
import { firestore, postToJSON } from "../lib/firebase";

export default function Home({property}) {


  return (
    <>
    <Box flexDirection={"column"}  >
     {/* <Flex bg="tan" p={4}   >
            <Box  maxW="800px" w="100%"  mx="auto" >
            <NextLink href="/login">
                <Link my="auto">login</Link>
                </NextLink>
                <NextLink href="/register"  my="auto">
                <Link>register</Link>
                </NextLink>
            </Box>
           
        </Flex> */}
        
        
        </Box>
        <Header/>
        <Box maxW="800px" mx="auto" w="100%" h={["150px","80px","80px","50px"]}>

        </Box>
      <Flex mt={8} maxW="800px" mx="auto" w="100%"  flexDirection={"row"}  >
      <SimpleGrid columns={2} spacing={2} p={2}>
    <BoDy property={property}/>
    
   
    
</SimpleGrid>
      </Flex>
    </>
  );
}

Home.getInitialProps = async ({}) => {
 const get= await firestore.collection("test").get();
 const property= get.docs.map(postToJSON)

 return {property}

}