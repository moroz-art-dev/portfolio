import React from 'react';
import PropTypes from 'prop-types';
import { Flex, HStack, Text, Link } from '@chakra-ui/react';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectLinks = ({ url, demo }) => (
  <Flex justify='space-between' width='100%'>
    <Link href={url} isExternal color='primary.20'>
      <HStack spacing={2} align='center'>
        <Text textAlign={['left', 'center']} fontWeight='bold'>
          GitHub Project
        </Text>
        <FontAwesomeIcon icon={faGithubSquare} size='lg' />
      </HStack>
    </Link>
    <Link href={demo} isExternal color='primary.20'>
      <HStack spacing={2} align='center'>
        <Text textAlign={['right', 'center']} fontWeight='bold'>
          Demo
        </Text>
        <FontAwesomeIcon icon={faPlayCircle} size='lg' />
      </HStack>
    </Link>
  </Flex>
);

ProjectLinks.propTypes = {
  url: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
};

export default ProjectLinks;
