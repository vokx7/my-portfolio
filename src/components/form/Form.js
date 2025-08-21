import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import Button from "../common/Button";
import FormField from "./FormField";
import FormTextarea from "./FormTextarea";

const Form = () => {
  const [formState, setFormState, handleChange] = useForm({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  const [errors, setErrors] = useState({
    name: [],
    email: [],
    message: [],
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isSuccess = true;

    const newErrors = {
      name: [],
      email: [],
      message: [],
    };

    if (!name) {
      newErrors.name.push("This field is required!");
      isSuccess = false;
    }
    if (!email) {
      newErrors.email.push("This field is required!");
      isSuccess = false;
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
        newErrors.email.push("Please enter a valid email address!");
        isSuccess = false;
      }
    }
    if (!message) {
      newErrors.message.push("This field is required!");
      isSuccess = false;
    }

    setErrors(newErrors);
    setSuccess(isSuccess);

    if (isSuccess) {
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    }

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 pb-8">
        <FormField
          type="text"
          name="name"
          label="Name*"
          value={formState.name}
          onChange={handleChange}
          errors={errors.name}
        />
        <FormField
          type="email"
          name="email"
          label="Email*"
          value={formState.email}
          onChange={handleChange}
          errors={errors.email}
        />
      </div>
      <FormTextarea
        name="message"
        label="Message*"
        value={formState.message}
        onChange={handleChange}
        errors={errors.message}
      />

      <div className="pt-10 text-center">
        <Button as="button" type="submit">
          Submit
        </Button>
      </div>
      {success && (
        <p className="mt-8 p-3 text-2xl text-center font-bold underline">
          Thanks for the message!
        </p>
      )}
    </form>
  );
};

export default Form;
