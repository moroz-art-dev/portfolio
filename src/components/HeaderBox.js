import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
const HeaderBox = ({ headerBgColor, children }) => {
  const headerBox = useRef(null);
  const prevScrollPos = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    setIsVisible(prevScrollPos.current > currentScrollPos);
    prevScrollPos.current = currentScrollPos;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      ref={headerBox}
      position='fixed'
      top={0}
      left={0}
      right={0}
      transform={isVisible ? 'translateY(0)' : 'translateY(-200px)'}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor={headerBgColor}
      zIndex={999}
      boxShadow='sm'
    >
      <Box maxWidth='1280px' margin='0 auto' py={2} px={4}>
        {children}
      </Box>
    </Box>
  );
};

HeaderBox.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  headerBgColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HeaderBox;
