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
      };

  const headingType = nested ? 'p' : 'h3';

  const renderSkillItem = (key, value) => {
    if (typeof value === 'object' && value !== null) {
      return (
        <SkillSection
          key={key}
          sectionTitle={key}
          sectionData={value}
          imageBaseUrl={imageBaseUrl}
          nested
        />
      );
    }

    return (
      <Box key={key} display='flex' alignItems='center' mr={4} mb={4}>
        {typeof value === 'string' && value !== 'false' ? (
          <>
            <LazyLoadImage
              style={{ height: 30, width: 'auto', marginRight: '8px' }}
              src={imageBaseUrl + value}
              alt={key}
              effect='blur'
              height={'30'}
              title={key}
            />
            <Box as='span'>{key}</Box>
          </>
        ) : (
          <Box as='span'>{key}</Box>
        )}
      </Box>
    );
  };

  return (
    <Box
      {...style}
      style={{
        display: 'flex',
        flexDirection: nested ? 'row' : 'column',
      }}
      mb={4}
    >
      {sectionTitle && sectionTitle.length > 2 && (
        <Heading as={headingType} size='md' mb={4}>
          {sectionTitle}
        </Heading>
      )}
      <Flex flexWrap='wrap'>
        {Object.entries(sectionData).map(([key, value]) =>
          renderSkillItem(key, value)
        )}
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
