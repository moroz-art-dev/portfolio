import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      position='fixed'
      bottom='4'
      right='4'
      opacity={isVisible ? '1' : '0'}
      pointerEvents={isVisible ? 'auto' : 'none'}
      transition='opacity 0.3s'
    >
      <IconButton
        aria-label='Scroll To Top'
        icon={<FontAwesomeIcon icon={faArrowUp} />}
        onClick={handleClick}
        size='lg'
        bg='primary.20'
        color='primary.50'
        _hover={{
          bg: 'primary.10',
          color: 'primary.20',
        }}
      />
    </Box>
  );
};

export default ScrollToTop;
