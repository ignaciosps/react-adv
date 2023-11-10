import { ChangeEvent, FormEvent, useState } from "react";

export const useForm = <T>(initialValues: T) => {
  const [formData, setFormData] = useState(initialValues);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log("formData");
    console.log(formData);
  };

  const resetForm = () => {
    setFormData({ ...initialValues });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    onChange,
    onSubmit,
    resetForm,
    isValidEmail,
    formData,
    ...formData,
  };
};
