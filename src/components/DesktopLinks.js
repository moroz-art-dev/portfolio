import React from 'react';
import PropTypes from 'prop-types';
import { HStack, Link } from '@chakra-ui/react';

const DesktopLinks = ({ links, linkColor, linkHoverColor, handleClick }) => (
  <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
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
        textTransform='uppercase'
      >
        {link.name}
      </Link>
    ))}
  </HStack>
);

DesktopLinks.propTypes = {
  links: PropTypes.array.isRequired,
  linkColor: PropTypes.string.isRequired,
  linkHoverColor: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default DesktopLinks;
