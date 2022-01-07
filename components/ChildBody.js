import { Box, Image, Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import { aDD } from "../util/addItem";
import { useToast } from '@chakra-ui/react'

export  function ChildBody({ p }) {
    const [set, setme] = useState(false);
    const [lod, setlod] = useState(false);
    const [counter,setcounter]= useState(0);
    const toast = useToast()
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' height='450px'>
            <Image src={p.imageUrl} alt={p.imageAlt} objectFit="cover" height="300px" />

            <Box p='2'>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
{p.title}
                </Box>

                <Box>
                ₦{p.formattedPrice}

                </Box>

                <Box display='flex' mt='2' alignItems='center'>

                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      { 
                      
                      <Button colorScheme='teal' variant='outline' isLoading={lod} onClick={()=>{
                            setlod(true)
                            aDD({p}).then(()=>{
setlod(false);
setme(true);
toast({
    title: 'item added',
    description: `${p.title} added`,
    status: 'success',
    duration: 9000,
    isClosable: true,
  })
                            })
                        }}>
                            ADD
                        </Button>
                        }  


                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
