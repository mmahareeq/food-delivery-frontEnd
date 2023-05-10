import React from 'react'
import { useParams } from 'react-router-dom';
import { useFormik } from "formik";
import { newPassword } from '../../features/users/userAction';
export default function () {
  let {token} = useParams();

  const initValues = {
    email: null,
    password: null,
    confirmPassword: null,
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "password is required!";
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords don't match!";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: initValues,
    validate,
    onSubmit: async(values) => {
     const data = await newPassword({
      email: values.email,
      password: values.password
     }, token);

    },
    isInitialValid: (values) => console.log(values),
  });

  return (
     <form onSubmit={formik.handleSubmit} className="form h-screen bg-lightpink">
     <h4>Reset Password</h4>
      <div className="flex flex-col">
        <label htmlFor="email" className="mt-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
          className="w-80 p-2 "
        ></input>
        {formik.errors.email ? (
          <div className="text-red text-start w-80">{formik.errors.email}</div>
        ) : null}
      </div>
      {/* <label>Password</label> */}
      <div className="flex flex-col">
        <label htmlFor="password" className="mt-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          className=" w-80 p-2"
          value={formik.values.password}
          onChange={formik.handleChange}
          required
        ></input>
        {formik.errors.password ? (
          <div className="text-red text-start w-80">
            {formik.errors.password}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <label htmlFor="confirmPassword" className="mt-2">
          {" "}
          confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          className="mt-2 w-80 p-2"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          required
        ></input>
        {formik.errors.confirmPassword ? (
          <div className="text-red text-start w-80">
            {formik.errors.confirmPassword}
          </div>
        ) : null}
      </div>

      <button
        className="btn-secondary p-2 mt-2 disabled:opacity-75 w-80 "
        type="submit"
        disabled={ !formik.isValid}
      > Save </button>
      
    </form>
  )
}
