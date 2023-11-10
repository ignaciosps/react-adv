import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  terms: boolean;
  jobType: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  jobType: "",
  terms: false,
};

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo no tiene un formato válido")
            .required("Requerido"),
          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["it-jr"], "Esta opción no es permitida"),
          terms: Yup.boolean().isTrue("Debe de aceptar las condiciones"),
        })}
      >
        {() => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">jobType</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Subtim</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
