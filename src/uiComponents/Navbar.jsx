// Navbar.js
import React from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Box as="div" fontSize="1.5rem" fontWeight="bold">
        Supplychain Simulations
      </Box>
      <Box as="ul" listStyleType="none" display="flex">
        <Box as="li" marginRight="4">
          <Link href="/" textDecoration="none" _hover={{ color: 'teal.300' }}>
            Home
          </Link>
        </Box>
       
        <Box as="li">
          <Link href="/contact" textDecoration="none" _hover={{ color: 'teal.300' }}>
            Admin
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Navbar;
