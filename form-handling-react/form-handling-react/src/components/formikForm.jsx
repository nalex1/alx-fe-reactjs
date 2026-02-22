import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("User registered successfully!");
        resetForm();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-center">Register (Formik)</h2>

          <Field
            name="username"
            placeholder="Username"
            className="w-full border p-2 mb-2"
          />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />

          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-2"
          />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />

          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-2"
          />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />

          <button type="submit" className="bg-green-600 text-white w-full py-2 rounded">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;