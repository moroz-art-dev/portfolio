import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

import SocialLinks from './SocialLinks';
import DesktopLinks from './DesktopLinks';
import MobileMenu from './MobileMenu';

const HeaderContent = ({
  socials,
  links,
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
    <SocialLinks socials={socials} headerTextColor={headerTextColor} />
    <DesktopLinks
      links={links}
      linkColor={linkColor}
      linkHoverColor={linkHoverColor}
      handleClick={handleClick}
    />
    <MobileMenu
      links={links}
      linkColor={linkColor}
      linkHoverColor={linkHoverColor}
      handleClick={handleClick}
    />
  </Box>
);

HeaderContent.propTypes = {
  socials: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
  headerTextColor: PropTypes.string.isRequired,
  linkColor: PropTypes.string.isRequired,
  linkHoverColor: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default HeaderContent;
