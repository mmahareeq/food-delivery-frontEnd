import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import logo from "../../assets/images/logo.png";
import Spinner from "../../shared/Spinner/Spinner";
import { signup } from "../../features/users/userAction";
import "./signup.css";

export default function Signup() {
  const dispatch = useDispatch();
  const { loading, userinfo, error, success } = useSelector(
    (state) => state.users
  );
  const nevigate = useNavigate();
  const initValues = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "User Name is required!";
    }
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
    onSubmit: (values) => {
      dispatch(signup(values)).unwrap();
    },
    isInitialValid: (values) => console.log(values),
  });
  useEffect(() => {
    if (success) {
      nevigate("/");
    }
  }, [nevigate, success, userinfo, formik.isValidating]);

  return (
    <form onSubmit={formik.handleSubmit} className="form h-screen bg-lightpink">
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="logo w-75"></img>
      </div>

      {/* <label>Email</label> */}
      {error?.message ? (
        <div className="ErrorMessage pl-1 w-80">Error: {error.message}</div>
      ) : null}
      <div className="flex flex-col">
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          required
          className="w-80 p-2"
        ></input>
        {formik.errors.username ? (
          <div className="text-red text-start w-80">
            {formik.errors.username}
          </div>
        ) : null}
      </div>
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
        disabled={loading || !formik.isValid}
      >
        {" "}
        {loading ? <Spinner /> : "SignUp"}
      </button>
      <p className="mt-5 signUp">
        {" "}
        Already have a account ?
        <Link to="/login" className="text-softorange font-medium no-underline">
          LogIn
        </Link>{" "}
        Now
      </p>
    </form>
  );
}
