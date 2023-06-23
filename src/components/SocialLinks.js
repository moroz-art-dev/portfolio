import React from 'react';
import PropTypes from 'prop-types';
import { HStack, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLinks = ({ socials, headerTextColor }) => (
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
);

SocialLinks.propTypes = {
  socials: PropTypes.array.isRequired,
  headerTextColor: PropTypes.string.isRequired,
};

export default SocialLinks;
