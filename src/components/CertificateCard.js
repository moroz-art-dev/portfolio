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

const CertificateCard = ({ name, url, imageSrc, icon }) => {
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
    >
      <Image src={imageSrc} alt={name} _hover={{ opacity: 0.8 }} />
      <VStack mt={4} alignItems='flex-start'>
        <Heading as='h2' size='md' color='gray.800'>
          {name}
        </Heading>
        <Link href={url} isExternal color='primary.20'>
          <HStack spacing={2} align='center' justify='center'>
            {icon}
            <Text textAlign={['left', 'center']} fontWeight='bold'>
              See more
            </Text>
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
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default CertificateCard;
