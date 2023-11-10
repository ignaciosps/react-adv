import { useField, ErrorMessage } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props?.id || props.name}>{label}</label>
      <select id={props?.id || props.name} {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
