import { HStack, Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import Icon from './Icon';

const SocialLinks = ({ headerTextColor }) => {
  const socials = useSelector(state => state.socials);
  return (
    <HStack spacing={4}>
      {socials.map(social => (
        <Link
          key={social.url}
          href={social.url}
          target='_blank'
          rel='noopener noreferrer'
          _hover={{ color: 'primary.40' }}
        >
          {social.icon && (
            <Icon
              fortAwesome={social.fortAwesome}
              icon={social.icon}
              size='lg'
              color={headerTextColor}
            />
          )}
        </Link>
      ))}
    </HStack>
  );
};

SocialLinks.propTypes = {
  headerTextColor: PropTypes.string.isRequired,
};

export default SocialLinks;
