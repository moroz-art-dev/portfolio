import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
  VStack,
} from '@chakra-ui/react';

const ContactForm = ({ fields, formik, isLoading }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack spacing={4}>
        {fields.map(field => (
          <FormControl
            key={field.id}
            isInvalid={formik.errors[field.name] && formik.touched[field.name]}
          >
            <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
            <field.component
              id={field.id}
              name={field.name}
              type={field.type}
              height={field.component === Textarea ? 250 : undefined}
              onChange={formik.handleChange}
              value={formik.values[field.name]}
            >
              {field.options &&
                field.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
            </field.component>
            <FormErrorMessage>{formik.errors[field.name]}</FormErrorMessage>
          </FormControl>
        ))}
        {isLoading ? (
          <Button
            isLoading
            loadingText='Submitting...'
            colorScheme='purple'
            width='full'
            disabled
          />
        ) : (
          <Button type='submit' colorScheme='purple' width='full'>
            Submit
          </Button>
        )}
      </VStack>
    </form>
  );
};

ContactForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      component: PropTypes.elementType.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  formik: PropTypes.object.isRequired,
};

export default ContactForm;
