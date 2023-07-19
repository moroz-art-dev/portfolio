import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectModal = ({ project, imageBaseUrl, isOpen, onClose }) => {
  const { title, description, imagesSrc } = project;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Heading as='h2' size='md' color='gray.800'>
            {title}
          </Heading>
          <Text color='gray.500' textAlign='left'>
            <strong>Description:</strong> {description}
          </Text>
          <Slider {...settings} style={{ maxWidth: '100%', maxHeight: '100%' }}>
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
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imagesSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  imageBaseUrl: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
