// import { useForm } from "../hooks/useForm";
import * as Yup from "yup";
import { Formik } from "formik";
import { MyTextInput } from "../components";
import "../styles/styles.css";

interface FormProps {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

const initialValues: FormProps = {
  name: "",
  email: "",
  password1: "",
  password2: "",
};

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("Submit");
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Requerido")
            .min(2, "Mínimo 2 caracteres")
            .max(15, "Máximo 15 caracteres"),
          email: Yup.string()
            .required("Requerido")
            .email("Revise el formato del correo"),
          password1: Yup.string()
            .required("Requerido")
            .min(6, "Mínimo 6 caracteres"),
          password2: Yup.string()
            .required("Requerido")
            .min(6, "Mínimo 6 caracteres")
            .oneOf([Yup.ref("password1")], "Las contraseñas no coinciden"),
        })}
      >
        {({ handleSubmit, handleReset }) => (
          <form onSubmit={handleSubmit}>
            <MyTextInput
              label="Name"
              id="name"
              name="name"
              placeholder="Name"
            />

            <MyTextInput
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="jonh@mail.com"
            />
            <MyTextInput
              label="Password"
              id="password1"
              name="password1"
              type="password"
            />

            <MyTextInput
              label="Repeat Password"
              id="password2"
              name="password2"
              type="password"
            />
            <button type="submit">Create</button>
            <button onClick={handleReset} type="button">
              Reset
            </button>
          </form>
        )}
      </Formik>
      {/* <form onSubmit={(ev) => onSubmit(ev)}>
        <input
          value={name}
          name="name"
          onChange={onChange}
          type="text"
          placeholder="Name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input
          value={email}
          name="email"
          onChange={onChange}
          type="email"
          placeholder="Email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es válido</span>}

        <input
          value={password1}
          name="password1"
          onChange={(ev) => onChange(ev)}
          type="password"
          placeholder="Password"
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length > 0 && password1.trim().length < 6 && (
          <span>La contraseña tiene que tener 6 caracteres</span>
        )}

        <input
          onChange={onChange}
          value={password2}
          name="password2"
          type="password"
          placeholder="Repeat Password"
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contraseñas deben ser iguales</span>
        )}

        <button type="submit">Create</button>
        <button onClick={resetForm} type="button">
          Reset
        </button>
      </form> */}
    </div>
  );
};
