import React from 'react';
import PropTypes from 'prop-types';
import FullScreenSection from './FullScreenSection';
import { Box, Heading } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ data: { title, list } }) => {
  return (
    <FullScreenSection
      backgroundColor='primary.30'
      isDarkBackground
      p={8}
      alignItems='flex-start'
      spacing={8}
    >
      <Heading as='h2' id='projects-section'>
        {title}
      </Heading>
      <Box
        display='grid'
        gridTemplateColumns='repeat(2,minmax(0,1fr))'
        gridGap={4}
      >
        {list.map(project => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imagesSrc={project.imagesSrc}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

ProjectsSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imagesSrc: PropTypes.arrayOf(PropTypes.func).isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ProjectsSection;
