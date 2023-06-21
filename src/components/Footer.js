import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer>
      <Box backgroundColor='primary.10'>
        <Flex
          margin='0 auto'
          px={12}
          color='white'
          justifyContent='center'
          alignItems='center'
          maxWidth='1024px'
          height={16}
        >
          <p>MorozArtDev • © 2023</p>
        </Flex>
      </Box>
    </footer>
  );
};
export default Footer;
