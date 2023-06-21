import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CertificateCard = ({ name, url, imageSrc }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box
      borderRadius='xl'
      bg='primary.50'
      p={4}
      shadow='md'
      cursor='pointer'
      onClick={openModal}
      _hover={{ opacity: 0.8 }}
    >
      <Image src={imageSrc} alt={name} />
      <VStack mt={4} alignItems='flex-start'>
        <Heading as='h2' size='md' color='gray.800'>
          {name}
        </Heading>
        <Link href={url} isExternal color='primary.20'>
          <HStack spacing={2} align='left'>
            <Text textAlign={['left', 'center']}>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size='sm' />
          </HStack>
        </Link>
      </VStack>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={imageSrc} alt={name} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

CertificateCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default CertificateCard;
