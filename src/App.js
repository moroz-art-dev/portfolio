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
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <Header />
        <main>
          <LandingSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactFormSection />
        </main>
        <Footer />
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
