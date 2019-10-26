import React from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const loginApi = "http://localhost:5000/api/login";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const onLogin = ({ username, password }) => {
    axios
      .post(loginApi, { username, password })
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.payload);
        props.history.push("/bubbles")
      // .catch(error => alert(error))
    });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onLogin}
        render={() => (
          <Form>
            <Field name="username" type="text" placeholder="Username" />
            <Field name="password" type="text" placeholder="Password" />
            <button type='Submit'>Submit</button>
          </Form>
        )}
      />
    </>
  );
};

export default Login;
