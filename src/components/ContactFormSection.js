import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Heading,
  VStack,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { useAlertContext } from '../context/alertContext';
import useSubmit from '../hooks/useSubmit';
import FullScreenSection from './FullScreenSection';
import ContactForm from './ContactForm';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

const ContactFormSection = () => {
  const contacts = useSelector(state => state.contacts);
  const { title } = contacts;

  const { isLoading, response, submit } = useSubmit();
  const fields = [
    {
      id: 'firstName',
      label: 'Name',
      name: 'firstName',
      component: Input,
    },
    {
      id: 'email',
      label: 'Email Address',
      name: 'email',
      type: 'email',
      component: Input,
    },
    {
      id: 'type',
      label: 'Type of enquiry',
      name: 'type',
      component: Select,
      options: [
        { value: 'jobInquiry', label: 'Job Inquiry' },
        { value: 'projectProposal', label: 'Project Proposal' },
        { value: 'partnership', label: 'Partnership' },
        { value: 'other', label: 'Other' },
      ],
    },
    {
      id: 'comment',
      label: 'Your message',
      name: 'comment',
      component: Textarea,
    },
  ];

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'jobInquiry',
      comment: '',
    },
    onSubmit: values => {
      submit('', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      comment: Yup.string()
        .min(25, 'Must be 25 characters at minimum')
        .required('Required'),
    }),
  });

  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor='primary.60'
      py={16}
      spacing={8}
    >
      <VStack
        w={['360px', '600px', '1024px']}
        p={8}
        alignItems='flex-start'
        mx='auto'
      >
        <Heading as='h1' id='contact-section'>
          {title}
        </Heading>
        <Box rounded='md' w='100%'>
          <ContactForm fields={fields} formik={formik} isLoading={isLoading} />
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactFormSection;
