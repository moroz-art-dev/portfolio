import React from 'react';
import PropTypes from 'prop-types';
import { useColorModeValue } from '@chakra-ui/react';

import HeaderContent from './HeaderContent';
import HeaderBox from './HeaderBox';

const Header = ({ socials, links }) => {
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

  const headerBgColor = useColorModeValue('primary.10', 'primary.20');
  const headerTextColor = useColorModeValue('primary.50', 'primary.10');
  const linkColor = useColorModeValue('primary.40', 'primary.30');
  const linkHoverColor = useColorModeValue('primary.30', 'primary.40');

  return (
    <header>
      <HeaderBox headerBgColor={headerBgColor}>
        <HeaderContent
          socials={socials}
          links={links}
          headerTextColor={headerTextColor}
          linkColor={linkColor}
          linkHoverColor={linkHoverColor}
          handleClick={handleClick}
        />
      </HeaderBox>
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
