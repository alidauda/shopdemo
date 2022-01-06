import React from 'react';
import { Box } from '@chakra-ui/react';

export  default function Wapper ({children,variant}){
    return(
        <Box mt={8} maxW={variant=="regular" ?"800px":"400px"}
        mx="auto" w="100%">
            {children}

        </Box>
    );
}