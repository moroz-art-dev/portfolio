import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = ({ links, linkColor, linkHoverColor, handleClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box display={{ base: 'flex', md: 'none' }}>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <MenuButton
          as={IconButton}
          icon={<FontAwesomeIcon icon={faBars} />}
          onClick={handleMenuToggle}
        />
        <MenuList>
          {links.map(link => (
            <MenuItem
              key={link.id}
              onClick={handleClick(link.id)}
              color={linkColor}
              _hover={{
                color: linkHoverColor,
              }}
            >
              {link.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

MobileMenu.propTypes = {
  links: PropTypes.array.isRequired,
  linkColor: PropTypes.string.isRequired,
  linkHoverColor: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MobileMenu;
