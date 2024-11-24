import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const FormikForm = () => {
  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // Handle form submission
  const handleSubmit = (values) => {
    console.log('Form data submitted:', values);
    // You can replace this with an actual API call or other action
  };

  return (
    <div>
      <h1>Registration Form with Formik</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            {/* Username Field */}
            <div>
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
              {/* Display validation error for username */}
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
              {errors.username && touched.username && <div>{errors.username}</div>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              {/* Display validation error for email */}
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              {/* Display validation error for password */}
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
              {errors.password && touched.password && <div>{errors.password}</div>}
            </div>

            {/* Submit Button */}
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
