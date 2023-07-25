import { Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import { useSelector } from 'react-redux';

import CertificateCard from './CertificateCard';
import FullScreenSection from './FullScreenSection';

import useCertificates from '../hooks/useCertificates';

const CertificatesSection = () => {
  useCertificates();

  const data = useSelector(state => state.certificates.data);
  const { title, list, imageBaseUrl } = data;

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
        {list &&
          list.map(certificate => (
            <CertificateCard
              icon={certificate.icon}
              key={certificate.name}
              name={certificate.name}
              url={certificate.url}
              imageSrc={imageBaseUrl + certificate.imageSrc}
            />
          ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default CertificatesSection;
