import { useState } from "react";

export const useForm = (initialValues) => {
  const [formState, setFormState] = useState(initialValues);

  const getValue = (target) => {
    return target.value;
  };

  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: getValue(e.target),
    }));
  };

  return [formState, setFormState, handleChange];
};
