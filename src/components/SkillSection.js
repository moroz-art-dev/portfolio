import { Box, Flex, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SkillSection = ({ sectionTitle, sectionData, imageBaseUrl, nested }) => {
  const style = nested
    ? { mt: 2 }
    : {
        borderRadius: 'xl',
        bg: 'primary.50',
        p: 4,
        shadow: 'md',
        pb: 0,
      };

  const headingType = nested ? 'h4' : 'h3';

  return (
    <Box {...style}>
      {sectionTitle !== '' && (
        <Heading as={headingType} size='md' mb={4}>
          {sectionTitle}
        </Heading>
      )}
      <Flex flexWrap='wrap'>
        {Object.entries(sectionData).map(([key, value]) => (
          <Box
            key={key}
            as='article'
            display='flex'
            alignItems='center'
            mr={4}
            mb={4}
          >
            {typeof value === 'object' ? (
              <SkillSection
                sectionTitle={key}
                sectionData={value}
                imageBaseUrl={imageBaseUrl}
                nested
              />
            ) : (
              <>
                {typeof value === 'string' && (
                  <LazyLoadImage
                    style={{ height: 30, width: 'auto', marginRight: '8px' }}
                    src={imageBaseUrl + value}
                    alt={key}
                    effect='blur'
                  />
                )}
                <Box as='span'>{key}</Box>
              </>
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

SkillSection.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  sectionData: PropTypes.object.isRequired,
  imageBaseUrl: PropTypes.string.isRequired,
  nested: PropTypes.bool,
};

SkillSection.defaultProps = {
  nested: false,
};

export default SkillSection;
