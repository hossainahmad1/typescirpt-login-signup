import { Box } from '@chakra-ui/react';
import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <Box>
            <Tabs variant='unstyled'>
                <TabList w='10%' mx='auto'>
                    <Link to='/'><Tab height={20} width={100} _selected={{ color: 'white', bg: 'blue.500' }}> Log in</Tab></Link>
                    <Link to='/signup'> <Tab height={20} width={100} _selected={{ color: 'white', bg: 'green.400' }}>Sign up</Tab></Link>
                </TabList>
            </Tabs>
        </Box>
    );
};

export default Navber;