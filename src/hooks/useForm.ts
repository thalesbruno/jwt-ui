import React from 'react';
import { FormValuesState } from '../interfaces/FormValuesState';

export default function useForm(initialValues: {}) {
  const [values, setValues] = React.useState<FormValuesState>(
    initialValues || {}
  );

  const handleChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return { values, handleChange };
}
