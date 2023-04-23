import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import Spinner from "../../shared/Spinner/Spinner";
import { login } from "../../features/users/userAction";
import "./login.css";

export default function Login() {
  const dispatch = useDispatch();
  const { loading, userinfo, error, success } = useSelector(
    (state) => state.users
  );
  const nevigate = useNavigate();

  const initValues = {
    email: null,
    password: null,
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

    return errors;
  };
  // formik
  const formik = useFormik({
    initialValues: initValues,
    validate,
    onSubmit: (values) => {
      dispatch(login(values)).unwrap();
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
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
          className="w-80 p-2"
        ></input>
        {formik.errors.email ? (
          <div className="text-red text-start w-80">{formik.errors.email}</div>
        ) : null}
        {/* <label>Password</label> */}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="mt-4">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-80 p-2"
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
      <span className="forget-password">
        <Link to="/forgetpassword"> Forget Password?</Link>
      </span>

      <button
        className="btn-secondary p-2 disabled:opacity-75 w-80 mt-4"
        type="submit"
        disabled={loading || !formik.isValid}
      >
        {loading ? <Spinner /> : "Login"}
      </button>
      <p className="mt-5 signUp">
        {" "}
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-softorange font-medium no-underline"
        >
          SignUp
        </Link>{" "}
        Now
      </p>
    </form>
  );
}
