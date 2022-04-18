import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./Register.css";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updareError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  let errorElement;

  if (loading || updating) {
    return <loading />;
  }

  const navigateLogin = () => {
    navigate("/login");
  };

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    alert("Updated profile");
    navigate("/home");
  };

  return (
    <div className="register-form mt-3">
      <h2 style={{ textAlign: "center" }}>Please Register</h2>
      <form onSubmit={handleRegister} className="mt-3">
        <input type="text" name="name" id="" placeholder="Your Name" />

        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />

        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />

        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept Tutor Pro Terms and Conditions
        </label>

        <input
          disabled={!agree}
          className="mt-3 bg-primary  text-white rounded-2"
          type="submit"
          value="Register"
        />

        {errorElement}
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>

      <SocialLogin />
    </div>
  );
};

export default Register;