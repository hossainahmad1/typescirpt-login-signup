import React from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    WrapItem,
    Button,
    Flex,
    Box,
    Text,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'


const Login = () => {
    return (
        <Box w='50%' mx='auto'>
            <FormControl isRequired background='red.200' padding='10px' height='400px' mt='80px' borderRadius="10">
                <Text fontSize={40} fontWeight='extrabold'>Log In</Text>
                <FormLabel mb='10px' ml='25%'>Email address</FormLabel>
                <Input mb='10px' placeholder='Enter Your Email' w='50%' type='email' />
                <FormLabel mb='10px' ml='25%'>Enter Your Password</FormLabel>
                <Input mb='10px' placeholder='Enter Your Password' w='50%' type='password' />
                <WrapItem mb='10px'>
                    <Box
                        as='button'
                        ml='25%'
                        p={4}
                        width={28}
                        color='white'
                        fontWeight='bold'
                        borderRadius='md'
                        bgGradient='linear(to-r, teal.500, green.500)'
                        _hover={{
                            bgGradient: 'linear(to-r, red.500, yellow.500)',
                        }}
                    >
                        Log in
                    </Box>
                </WrapItem>
            </FormControl>
        </Box>
    );
};

export default Login;