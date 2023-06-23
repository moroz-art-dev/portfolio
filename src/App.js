import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme';
import { AlertProvider } from './context/alertContext';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';
import Alert from './components/Alert';
import ScrollToTop from './components/ScrollToTop';

import dataLanding from './data/landing';
import dataProjects from './data/projects';
import dataCertificates from './data/certificates';
import links from './data/links';
import socials from './data/socials';
import dataContacts from './data/contacts';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <Header socials={socials} links={links} />
        <main>
          <LandingSection data={dataLanding} />
          <ProjectsSection data={dataProjects} />
          <CertificatesSection data={dataCertificates} />
          <ContactFormSection data={dataContacts} />
        </main>
        <Footer />
        <Alert />
        <ScrollToTop />
      </AlertProvider>
    </ChakraProvider>
  );
};

export default App;
