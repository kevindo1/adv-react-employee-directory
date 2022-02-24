import { useState } from 'react';

export function useForm() {
  const [formState, setFormState] = useState({});
  const [formError, setFormError] = useState('');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return { handleFormChange, formState, formError, setFormError };
}
