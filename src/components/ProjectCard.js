import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Link,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, imageSrc, url }) => {
  return (
    <Box
      borderRadius='xl'
      bg='primary.50'
      p={4}
      shadow='md'
      cursor='pointer'
      _hover={{ opacity: 0.8 }}
    >
      <Image borderRadius='xl' src={imageSrc} alt={title} />
      <VStack mt={4} alignItems='flex-start'>
        <Heading as='h2' size='md' color='gray.800'>
          {title}
        </Heading>
        <Text color='gray.500' textAlign='left'>
          {description}
        </Text>
        <Link href={url} isExternal color='primary.20'>
          <HStack spacing={2} align='left' justify='center'>
            <Text textAlign={['left', 'center']}>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size='sm' />
          </HStack>
        </Link>
      </VStack>
    </Box>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectCard;
