import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';

import HeaderContent from './HeaderContent';
import HeaderBox from './HeaderBox';

const Header = () => {
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
          headerTextColor={headerTextColor}
          linkColor={linkColor}
          linkHoverColor={linkHoverColor}
          handleClick={handleClick}
        />
      </HeaderBox>
    </header>
  );
};

export default Header;
