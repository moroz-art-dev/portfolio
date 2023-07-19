import React from 'react';
import { Heading, SimpleGrid } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import ProjectCard from './ProjectCard';
import { useSelector } from 'react-redux';
import useProjects from '../hooks/useProjects';

const ProjectsSection = () => {
  useProjects();

  const data = useSelector(state => state.projects.data);
  const { title, list, imageBaseUrl } = data;

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
      <SimpleGrid columns={[1, 2, 4]} gap={4}>
        {list &&
          list.map(project => (
            <ProjectCard
              key={project.title}
              project={project}
              title={project.title}
              description={project.description}
              imageBaseUrl={imageBaseUrl + project.imagesSubcategorySrc}
              imagesSrc={project.imagesSrc}
              url={project.url}
            />
          ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
