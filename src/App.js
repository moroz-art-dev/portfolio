import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Provider } from 'react-redux';

import Alert from './components/Alert';
import CertificatesSection from './components/CertificatesSection';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ScrollToTop from './components/ScrollToTop';
import SkillStackSection from './components/SkillStackSection';
import { AlertProvider } from './context/alertContext';
import { store } from './redux/store';
import theme from './theme/theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <AlertProvider>
          <Header />
          <main>
            <LandingSection />
            <ProjectsSection />
            <CertificatesSection />
            <SkillStackSection />
            <ContactFormSection />
          </main>
          <Footer />
          <Alert />
          <ScrollToTop />
        </AlertProvider>
      </Provider>
    </ChakraProvider>
  );
};

export default App;
