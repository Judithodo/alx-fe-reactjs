// src/components/FormikForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: (values) => {
      console.log('Form Data:', values);
      // Simulate an API call here
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && formik.touched.username && (
          <div style={{ color: 'red' }}>{formik.errors.username}</div>
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormikForm;
