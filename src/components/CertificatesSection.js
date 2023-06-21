import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from '@chakra-ui/react';
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
      <Box
        display='grid'
        gridTemplateColumns='repeat(4,minmax(0,1fr))'
        gridGap={4}
      >
        {list.map(project => (
          <CertificateCard
            icon={project.icon}
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
