import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, HStack, Link, useColorModeValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ socials, links }) => {
  const headerBox = useRef(null);
  const [yOffset, setYOffset] = useState(window.pageYOffset);

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    headerBox.current = yOffset < currentYOffset && currentYOffset !== 0;
    setYOffset(currentYOffset);
  }

  const handleClick = anchor => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBgColor = useColorModeValue('primary.10', 'primary.20');
  const headerTextColor = useColorModeValue('primary.50', 'primary.10');
  const linkColor = useColorModeValue('primary.40', 'primary.30');
  const linkHoverColor = useColorModeValue('primary.30', 'primary.40');

  return (
    <header>
      <Box
        ref={headerBox}
        position='fixed'
        top={0}
        left={0}
        right={0}
        transform={headerBox.current ? 'translateY(-200px)' : 'translateY(0px)'}
        translateY={0}
        transitionProperty='transform'
        transitionDuration='.3s'
        transitionTimingFunction='ease-in-out'
        backgroundColor={headerBgColor}
        zIndex={999}
        boxShadow='sm'
      >
        <Box
          color={headerTextColor}
          maxWidth='1280px'
          margin='0 auto'
          py={2}
          px={4}
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <HStack spacing={4}>
            {socials.map(social => (
              <Link
                key={social.url}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {social.fortAwesome ? (
                  <FontAwesomeIcon
                    icon={social.icon}
                    size='lg'
                    color={headerTextColor}
                  />
                ) : (
                  social.icon
                )}
              </Link>
            ))}
          </HStack>
          <HStack spacing={4}>
            {links.map(link => (
              <Link
                key={link.id}
                href={link.url}
                onClick={handleClick(link.id)}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {link.name}
              </Link>
            ))}
          </HStack>
        </Box>
      </Box>
    </header>
  );
};

Header.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.element, PropTypes.object])
        .isRequired,
      fortAwesome: PropTypes.bool.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
