import React, { useState } from "react";
import { Formik } from "formik";
import Requirements from "./Requirements";
const FancyRegistration = props => {
  const [long, longEnough] = useState(false);
  const [number, hasNumber] = useState(false);
  const [capital, hasCapital] = useState(false);
  const [small, hasSmall] = useState(false);
  const [special, hasSpecial] = useState(false);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={values => {
        values.password.length < 8 ? longEnough(false) : longEnough(true);
        !/\d/.test(values.password) ? hasNumber(false) : hasNumber(true);
        !/[A-Z]/.test(values.password) ? hasCapital(false) : hasCapital(true);
        !/[a-z]/.test(values.password) ? hasSmall(false) : hasSmall(true);
        !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(values.password) ? hasSpecial(false) : hasSpecial(true);


      }}
      onSubmit={(values, { resetForm, setErrors, setSubmitting }) => {
        let errors = {};
        if (!long || !number || !capital || !small || !special)
          errors.password =
            "Your password doesn't currently meet the requirements";  
        // If the errors object is empty then we've successfully met all the requirements
        if (
          Object.entries(errors).length === 0 &&
          errors.constructor === Object
        ) {
          alert(`Great, we've created an account for ${values.email}`);
          resetForm(); // Reset form for the example
        } else {
          setErrors(errors);
        }
        setSubmitting(false);
      }}
    >
      {({ errors, values, handleChange, handleSubmit, isSubmitting }) => (
        <>
          <h1>Create Your Account</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">What's your username?</label>
            <input
              autoFocus
              id="username"
              type="username"
              name="username"
              onChange={handleChange}
              required
              value={values.username}
            />
            <label htmlFor="password">
              What do you want your password to be?
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              required
              value={values.password}
            />
            {errors.password && (
              <label className="error" htmlFor="password">
                Sorry! {errors.password}
              </label>
            )}
            <Requirements long={long} number={number} />
            <button
              type="submit"
              value="Create account"
              disabled={isSubmitting}
            >
              Create account
            </button>
          </form>
        </>
      )}
    </Formik>
  );
};
export default FancyRegistration;