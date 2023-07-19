import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './redux/store';
import { Provider } from 'react-redux';

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
