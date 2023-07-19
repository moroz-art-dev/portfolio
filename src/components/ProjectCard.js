import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectCard = ({
  project: { title, description, technologies, imagesSrc, url, demo },
  imageBaseUrl,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: selectedImageIndex,
    cssEase: 'linear',
    customPaging: () => <div style={{ width: '30px' }} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box borderRadius='xl' bg='primary.50' p={4} shadow='md'>
      <Box
        cursor='pointer'
        _hover={{ opacity: 0.8 }}
        borderRadius='xl'
        bg={`url(${imageBaseUrl}${imagesSrc[selectedImageIndex]})`}
        bgSize='cover'
        bgPosition='top'
        bgRepeat='no-repeat'
        aspectRatio={1}
        onClick={() => {
          setSelectedImageIndex(0);
          setIsModalOpen(true);
        }}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Heading as='h2' size='md' color='gray.800'>
              {title}
            </Heading>
            <Text color='gray.500' textAlign='left'>
              <strong>Description:</strong> {description}
            </Text>
            <Slider
              {...settings}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            >
              {imagesSrc.map((getImageSrc, index) => (
                <Image
                  key={index}
                  borderRadius='xl'
                  src={imageBaseUrl + getImageSrc}
                  alt={title}
                  style={{ maxWidth: '100%', maxHeight: '50%' }}
                />
              ))}
            </Slider>
          </ModalBody>
        </ModalContent>
      </Modal>
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
      </VStack>
    </Box>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    imagesSubcategorySrc: PropTypes.string.isRequired,
    imagesSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
  }).isRequired,
  imageBaseUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
