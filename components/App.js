import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { CartItem } from './CartItem'
  import { CartOrderSummary } from './CartOrderSummary'
  import { cartData } from './_data'
  
  export default function App ({posts,con}) {
    const item = posts.map(({post}) => post.price);
    console.log(item)
    let total=0
    if(item){
      for (let i = 0; i < item.length; i++) { 

        total+=(item[i]);
        
        
      }
    }
  return(
    
    <Box
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex="2"
        >
         
          {posts.map(({ id, post }) => {<Heading fontSize="2xl" fontWeight="extrabold">
            {post.title}
      </Heading>
      })}

       
 
  
          <Stack spacing="6">
            {posts.map(({id,post}) => (
              <CartItem key={id} {...post} />
            ))}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary  total={total} con={con}/>
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
}