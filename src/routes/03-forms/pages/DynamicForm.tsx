import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

interface OptionProps {
  id: string | number;
  label: string;
}

interface ValidationProps {
  type: "required" | "minLength" | "email";
  value?: string | boolean | number;
}

interface formJsonProps {
  type: "text" | "input" | "password" | "email" | "select";
  name: string;
  placeholder?: string;
  label: string;
  value?: string | boolean | number;
  validations?: ValidationProps[];
  options?: OptionProps[];
}

const formJson: formJsonProps[] = [
  {
    type: "text",
    name: "firstName",
    placeholder: "Ignacio",
    label: "First Name",
    value: "",
    validations: [
      {
        type: "required",
      },
    ],
  },
  {
    type: "text",
    name: "lastName",
    placeholder: "Esposto",
    label: "Last Name",
    value: "",
    validations: [
      {
        type: "required",
      },
      {
        type: "minLength",
        value: 5,
      },
    ],
  },
  {
    type: "email",
    name: "email",
    placeholder: "john@mail.com",
    label: "Email",
    value: "",
    validations: [
      {
        type: "required",
      },
      {
        type: "email",
      },
    ],
  },
  {
    type: "select",
    name: "favoriteGame",
    placeholder: "",
    label: "Favorite Game",
    value: "",
    options: [
      {
        id: "1",
        label: "Super Smash",
      },
      {
        id: "2",
        label: "Metal Gear",
      },
      {
        id: "3",
        label: "Residen Evil",
      },
    ],
    validations: [
      {
        type: "required",
      },
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialValues: { [key: string]: any } = {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input?.validations) continue;
  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule.value as number) || 2,
        `Mínimo de ${rule.value || 2}`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Revise el formato del correo");
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (
                type === "input" ||
                type === "text" ||
                type === "password" ||
                type === "email"
              ) {
                return (
                  <MyTextInput
                    key={name}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              throw new Error(`El type: ${type}, no es soportado`);
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
