import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ProjectLinks from './ProjectLinks';
import ProjectModal from './ProjectModal';

const ProjectCard = ({
  project: { title, description, technologies, imagesSrc, url, demo },
  imageBaseUrl,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = () => {
    setSelectedImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box borderRadius='xl' bg='primary.50' p={4} shadow='md'>
      <Box
        cursor='pointer'
        borderRadius='xl'
        aspectRatio='1'
        overflow='hidden'
        onClick={openModal}
      >
        <LazyLoadImage
          src={imageBaseUrl + imagesSrc[selectedImageIndex]}
          alt={title}
          effect='blur'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <ProjectModal
        project={{ title, description, imagesSrc }}
        imageBaseUrl={imageBaseUrl}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      <VStack mt={4} alignItems='flex-start'>
        <Heading as='h2' size='md' color='gray.800'>
          {title}
        </Heading>
        <Text color='gray.500' textAlign='left'>
          {description.length > 90
            ? `${description.substring(0, 90)}...`
            : description}
        </Text>
        <Text color='gray.500' textAlign='left'>
          <strong>Technologies:</strong> {technologies}
        </Text>
        <ProjectLinks url={url} demo={demo} />
      </VStack>
    </Box>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    imagesSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
  }).isRequired,
  imageBaseUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
