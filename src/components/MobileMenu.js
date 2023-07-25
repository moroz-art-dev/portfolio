import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const MobileMenu = ({ linkColor, linkHoverColor, handleClick }) => {
  const links = useSelector(state => state.links);

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
  linkColor: PropTypes.string.isRequired,
  linkHoverColor: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MobileMenu;
