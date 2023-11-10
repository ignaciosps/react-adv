import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

interface FormProps {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

// const initialValues: FormProps = {
//   name: "Ignacio",
//   email: "ignaciosps@gmail.com",
//   password1: "123456",
//   password2: "123456",
// };

const initialValues: FormProps = {
  name: "",
  email: "",
  password1: "",
  password2: "",
};

export const RegisterPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    onChange,
    onSubmit,
    resetForm,
    isValidEmail,
  } = useForm(initialValues);

  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={(ev) => onSubmit(ev)}>
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
      </form>
    </div>
  );
};
