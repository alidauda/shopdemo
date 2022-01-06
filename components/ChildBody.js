import { Box, Image, Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import { aDD } from "../util/addItem";

export  function ChildBody({ p }) {
    const [set, setme] = useState(false);
    const [lod, setlod] = useState(false);
    const [counter,setcounter]= useState(0);
    
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={p.imageUrl} alt={p.imageAlt} />

            <Box p='2'>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    SHAWAMA
                </Box>

                <Box>
                    {p.formattedPrice}

                </Box>

                <Box display='flex' mt='2' alignItems='center'>

                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {set ? <>
                            <ButtonGroup variant='outline' spacing='1'>
                                <Button colorScheme='blue'>+</Button>
                                <div>{counter}</div>
                                <Button colorScheme='blue'>-</Button>
                            </ButtonGroup>
                        </> : <Button colorScheme='teal' variant='outline' isLoading={lod} onClick={()=>{
                            setlod(true)
                            aDD().then(()=>{
setlod(false);
setme(true);
                            })
                        }}>
                            ADD
                        </Button>}


                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
