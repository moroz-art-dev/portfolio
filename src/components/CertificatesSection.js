import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import CertificateCard from './CertificateCard';

const CertificatesSection = ({ data }) => {
  return (
    <FullScreenSection
      backgroundColor='primary.40'
      isDarkBackground
      p={8}
      alignItems='flex-start'
      spacing={8}
    >
      <Heading as='h2' id='certificates-section'>
        Certificates
      </Heading>
      <Box
        display='grid'
        gridTemplateColumns='repeat(4,minmax(0,1fr))'
        gridGap={4}
      >
        {data.map(project => (
          <CertificateCard
            key={project.name}
            name={project.name}
            url={project.url}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

CertificatesSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      getImageSrc: PropTypes.func.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CertificatesSection;
