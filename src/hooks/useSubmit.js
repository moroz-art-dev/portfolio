import { useState } from 'react';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      await wait(2000);

      const random = Math.random();
      if (random < 0.5) {
        throw new Error('Something went wrong');
      }

      setResponse({
        type: 'success',
        message: `Thanks for using this demo version, ${data.firstName}! Please note that this is a demo version of the service, and no emails will be sent.`,
      });
    } catch (error) {
      setResponse({
        type: 'error',
        message:
          'Thanks for using this demo version! Please note that this is a random message in the demo version, and no emails will be sent. If you encounter any issues, please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
