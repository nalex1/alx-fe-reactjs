import React from "react";
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

  return React.createElement(
    "div",
    { className: "min-h-screen flex items-center justify-center bg-gray-200" },
    React.createElement(
      Formik,
      {
        initialValues: { username: "", email: "", password: "" },
        validationSchema,
        onSubmit: handleSubmit,
      },
      React.createElement(
        Form,
        { className: "bg-white p-8 rounded-lg shadow-md w-full max-w-md" },

        React.createElement("h2", { className: "text-xl font-bold mb-4 text-center" }, "Register (Formik)"),

        React.createElement(Field, {
          name: "username",
          placeholder: "Username",
          className: "w-full border p-2 mb-2",
        }),
        React.createElement(ErrorMessage, {
          name: "username",
          component: "p",
          className: "text-red-500 text-sm",
        }),

        React.createElement(Field, {
          name: "email",
          type: "email",
          placeholder: "Email",
          className: "w-full border p-2 mb-2",
        }),
        React.createElement(ErrorMessage, {
          name: "email",
          component: "p",
          className: "text-red-500 text-sm",
        }),

        React.createElement(Field, {
          name: "password",
          type: "password",
          placeholder: "Password",
          className: "w-full border p-2 mb-2",
        }),
        React.createElement(ErrorMessage, {
          name: "password",
          component: "p",
          className: "text-red-500 text-sm",
        }),

        React.createElement(
          "button",
          {
            type: "submit",
            className: "bg-green-600 text-white w-full py-2 rounded",
          },
          "Register"
        )
      )
    )
  );
};

export default FormikForm;