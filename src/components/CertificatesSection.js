import React from 'react';
import PropTypes from 'prop-types';
import { Heading, SimpleGrid } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import CertificateCard from './CertificateCard';

const CertificatesSection = ({ data: { title, list } }) => {
  return (
    <FullScreenSection
      backgroundColor='primary.40'
      isDarkBackground
      p={8}
      alignItems='flex-start'
      spacing={8}
    >
      <Heading as='h2' id='certificates-section'>
        {title}
      </Heading>
      <SimpleGrid columns={[1, 2, 4]} gap={4}>
        {list.map(certificate => (
          <CertificateCard
            icon={certificate.icon}
            key={certificate.name}
            name={certificate.name}
            url={certificate.url}
            imageSrc={certificate.getImageSrc()}
          />
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

CertificatesSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
        name: PropTypes.string.isRequired,
        getImageSrc: PropTypes.func.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default CertificatesSection;
