import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,Box,
    FormHelperText
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaArrowRight } from 'react-icons/fa'
  import { useState } from "react";
  import { PaystackButton } from 'react-paystack'
  
  import { firestore, postToJSON } from "../lib/firebase";
  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
        
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium"> ₦{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [number,setNumber]=useState("");
    const [adress,setAddress] = useState("");
    const [save, setSave]=useState(false);
    const [isError,setIsError] = useState(false);
    const [mes,setmes]=useState("")
    const componentProps = {
        email:"alidauda14@gmail.com",
        amount: parseInt((2000)+"00"),
        metadata: {
          
          phone:number
        },
        subaccount:"ACCT_q7qaqe5hqxhgn7s",
        publicKey:"pk_test_37335d37c9fb118d8a917de0a58a8efde1bb96c4",
        text: "Pay Now",
        onSuccess: () =>{
          firestore.collection("orders").doc("test").set({
            "number":`${number}`,
            "items":"burger x2 SANDWITCH, shawama x2",
            "adress":"sam owkraji street",
            "price":"3000"
          })
            alert("Thanks for doing business with us! Come back soon!!"),
            onClose()
            setSave(false);
        },
          
          
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
      }
    return (
        <>
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={597} />
         
         
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
            ₦597
            </Text>
          </Flex>
        </Stack>
        <Button colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />} onClick={onOpen} >
          Checkout
        </Button>
        <Modal
        
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter your details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           { save?  <Box
              w={{
                base: "full",
                sm: "auto",
              }}
              flexShrink={0}
     bg={"blue.300"}         
    px="4"
    py="1.5"
    textAlign="center"
    borderWidth="1px"
    borderColor="whiteAlpha.400"
    fontWeight="medium"
    rounded="base"
   

            >
            <PaystackButton {...componentProps}  variant="link"/>
            </Box>:
           <><FormControl isRequired isInvalid={isError}>
              <FormLabel>Phone Number</FormLabel>
              <Input  type="number" placeholder='Phone Number' onChange={(e =>{
                  setNumber(e.target.value)
              })}/>
              <FormHelperText  color="red">
          
            {mes}
        
        </FormHelperText>
            </FormControl>

            <FormControl mt={4} isRequired isInvalid={isError}>
              <FormLabel>Address</FormLabel>
              <Input placeholder='Address' type="text" />
            </FormControl>
            </>}
          </ModalBody>

          <ModalFooter>
           
            <Button onClick={(e)=>{
setSave(false);
onClose();
            }
                }  colorScheme ="red">Cancel</Button>
            <Button colorScheme='whatsapp'  display={save?"none":"flex"}ml={3} onClick={(e)=>{

              if(number.length<=10){
setIsError(true);

              }else{
                setIsError(false)
                setSave(true);
              }
                
            }}>
              continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Stack>
     


    
      </>
    )
  }