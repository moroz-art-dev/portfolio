import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import FullScreenSection from './FullScreenSection';
import SkillSection from './SkillSection';

import useStack from '../hooks/useStack';

const SkillStackSection = () => {
  useStack();

  const data = useSelector(state => state.stack.data);
  const { list, title, imageBaseUrl } = data;

  return (
    <FullScreenSection
      backgroundColor='primary.20'
      isDarkBackground
      p={8}
      alignItems='flex-start'
      spacing={8}
    >
      <Box mt={8}>
        <Heading as='h2' size='lg' mb={4} id='stack-section'>
          {title}
        </Heading>
        <Flex flexWrap='wrap' color='gray.800'>
          <SimpleGrid columns={[1, 2, 2]} gap={4}>
            {list &&
              Object.entries(list).map(([sectionTitle, sectionData]) => (
                <SkillSection
                  key={sectionTitle}
                  sectionTitle={sectionTitle}
                  sectionData={sectionData}
                  imageBaseUrl={imageBaseUrl}
                />
              ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </FullScreenSection>
  );
};

export default SkillStackSection;
