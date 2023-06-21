import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectCard = ({ title, description, imagesSrc, url }) => {
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
    <Box borderRadius='xl' bg='primary.50' p={4} shadow='md' cursor='pointer'>
      <Box
        _hover={{ opacity: 0.8 }}
        borderRadius='xl'
        bg={`url(${imagesSrc[selectedImageIndex]()})`}
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
            <Slider
              {...settings}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            >
              {imagesSrc.map((getImageSrc, index) => (
                <Image
                  key={index}
                  borderRadius='xl'
                  src={getImageSrc()}
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
          {description}
        </Text>
        <Link href={url} isExternal color='primary.20'>
          <HStack spacing={2} align='center' justify='center'>
            <Text textAlign={['left', 'center']} fontWeight='bold'>
              GitHub Project
            </Text>
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
  imagesSrc: PropTypes.arrayOf(PropTypes.func).isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectCard;
