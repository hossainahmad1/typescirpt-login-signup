import React from 'react';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
    FormControl,
    FormLabel,
    Input,
    WrapItem,
    Box,
    Text,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'

const SignUp = () => {

    // const handleSignup = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email= form.email.value;
    //     const password = form.password.value;
    //     console.log(name,email,password)
    // }

    return (
        <Box w='50%' mx='auto'>
            <FormControl borderRadius="10" isRequired background='red.200' padding='10px' height='400px' mt='80px'>
                <Text fontSize={40} fontWeight='extrabold'>Sign Up</Text>
                <FormLabel mb='10px' ml='25%' >Enter Your Name</FormLabel>
                <Input name='name' mb='10px' placeholder='Enter Your Name' w='50%' type='name' />
                <FormLabel mb='10px' ml='25%'>Email address</FormLabel>
                <Input name='email' mb='10px' placeholder='Enter Your Email' w='50%' type='email' />
                <FormLabel mb='10px' ml='25%'>Enter Your Password</FormLabel>
                <Input name='password' mb='10px' placeholder='Enter Your Password' w='50%' type='password' />
                <WrapItem mb='10px'>
                    <Box
                        as='button'
                        ml='25%'
                        p={4}
                        width={28}
                        color='white'
                        fontWeight='bold'
                        borderRadius='md'
                        bgGradient='linear(to-r, green.200, pink.500)'
                        _hover={{
                            bgGradient: 'linear(to-r, #7928CA, #FF0080)',
                        }}
                    >
                        Sign Up
                    </Box>
                </WrapItem>
            </FormControl>
        </Box>
    );
};

export default SignUp;