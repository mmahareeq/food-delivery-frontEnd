import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import Spinner from "../../shared/Spinner/Spinner";
import { forgetPassword } from "../../features/users/userAction";
import logo from "../../assets/images/logo.png";

export default function ForgetPassword() {
  const { loading, userinfo, error, success } = useSelector(
    (state) => state.users
  );
  const [successed, setSuccessed] = useState(true);
  const nevigate = useNavigate();

  const initValues = {
    email: null,
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
    return errors;
  };
  // formik
  const formik = useFormik({
    initialValues: initValues,
    validate,
    onSubmit: (values) => {
      forgetPassword(values)
        .then((data) => {
          setSuccessed(true);
          console.log(data);
        })
        .catch((error) => console.log(error));
    },
    isInitialValid: (values) => console.log(values),
  });

  useEffect(() => {
    console.log(formik.isValid, formik.isValidating, formik.isInitialValid);
    if (success) {
      nevigate("/");
    }
  }, [nevigate, success, userinfo, formik.isValidating]);

  return (
    <div className="bg-lightpink h-screen flex justify-center align-items-center flex-col">
      <div className="flex justify-center">
            <img src={logo} alt="logo" className="logo w-75"></img>
      </div>
      {" "}
      {successed ? (
        <div >
          <p>
            You will receive a password reset email soon.Follow the link in the
            email to reset your password.
          </p>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit} className="form">
          {/* <label>Email</label> */}
          {error?.message ? (
            <div className="ErrorMessage pl-1">Error: {error.message}</div>
          ) : null}
          <div className="flex flex-col">
            <label>Please Enter your email</label>
            <input
              id="email"
              className=" w-80"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
            ></input>
            {formik.errors.email ? (
              <div className="text-red text-start w-80">
                {formik.errors.email}
              </div>
            ) : null}
            {/* <label>Password</label> */}
          </div>

          <button
            className=" btn-secondary p-2 mt-2 disabled:opacity-75 w-80"
            type="submit"
            disabled={loading || !formik.isValid}
          >
            {loading ? <Spinner /> : "send"}
          </button>
        </form>
      )}
    </div>
  );
}
// Reset Your Password
// You will receive a password reset email soon.Follow the link in the email to reset your password.
