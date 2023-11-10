import * as Yup from "yup";
import { Formik, Form } from "formik";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

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

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

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
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Ignacio"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Esposto"
            />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="jonh@google.com"
              type="email"
            />

            <MySelect name="jobType" label="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms" />

            <button type="submit">Subtim</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
