import { useField, ErrorMessage } from "formik";

interface Props {
  label: string;
  name: string;
  id?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  // console.log(field);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        id={props.id || props.name}
        className="text-input"
        {...field}
        {...props}
      />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
