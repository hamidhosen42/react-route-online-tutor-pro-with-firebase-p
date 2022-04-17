import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [agree, setAgree] = useState(false);

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (agree) {
      signInWithEmailAndPassword(email, password);
    }
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-5">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            label="Check me out"
          />
        </Form.Group> */}

        <Button
          className="w-50 mx-auto d-block"
          variant="primary"
          type="submit"
          name="tarms"
        //   disabled={!agree}
        >
          Login
        </Button>
      </Form>

      {errorElement}

      <p className="mt-3">
        New to Genius Car?{" "}
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>{" "}
      </p>

      <p className="mt-3">
        Forget password?
        <button
          className="btn btn-ink text-primary pe-auto text-decoration-none"
          onClick={async () => {
            const email = emailRef.current.value;
            if (email) {
              await sendPasswordResetEmail(email);
              toast("Sent email");
            } else {
              toast("Please enter your email address");
            }
          }}
        >
          Reset Password
        </button>
      </p>

      <SocialLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;