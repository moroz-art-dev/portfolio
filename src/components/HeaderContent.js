import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

import SocialLinks from './SocialLinks';
import DesktopLinks from './DesktopLinks';
import MobileMenu from './MobileMenu';

const HeaderContent = ({
  headerTextColor,
  linkColor,
  linkHoverColor,
  handleClick,
}) => (
  <Box
    color={headerTextColor}
    display='flex'
    alignItems='center'
    justifyContent='space-between'
  >
    <SocialLinks headerTextColor={headerTextColor} />
    <DesktopLinks
      linkColor={linkColor}
      linkHoverColor={linkHoverColor}
      handleClick={handleClick}
    />
    <MobileMenu
      linkColor={linkColor}
      linkHoverColor={linkHoverColor}
      handleClick={handleClick}
    />
  </Box>
);

HeaderContent.propTypes = {
  headerTextColor: PropTypes.string.isRequired,
  linkColor: PropTypes.string.isRequired,
  linkHoverColor: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default HeaderContent;
