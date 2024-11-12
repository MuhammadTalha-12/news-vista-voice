import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import "./LoginPage.css"; // Ensure this path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Check if email is valid
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      formErrors.email = "Invalid email format";
    }

    // Check if password is provided
    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    // Set errors if there are any
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Clear errors and proceed with sign-in
      setErrors({});
      setIsSubmitting(true);

      // Check for admin credentials
      if (email === "talhacom211@gmail.com" && password === "password") { // Replace "password" with your actual password
        // Simulate a successful sign-in
        setTimeout(() => {
          alert("Signed in successfully!");
          navigate("/Dashboard"); // Redirect to landing page
          setIsSubmitting(false);
        }, 1000);
      } else {
        // Simulate an API call for invalid credentials
        setTimeout(() => {
          alert("Invalid credentials!");
          setIsSubmitting(false);
        }, 1000);
      }
    }
  };

  // Handle Google Sign-In Success
  const handleGoogleLoginSuccess = (response) => {
    console.log("Google Login Successful:", response);
    const idToken = response.credential;
    console.log("Google ID Token:", idToken);
    // Send this token to your backend for further processing
  };

  // Handle Google Sign-In Failure
  const handleGoogleLoginFailure = (error) => {
    console.error("Google Login Failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="login-page">
        <div className="left-section">
          <h1>Welcome Back</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <FontAwesomeIcon icon={faGoogle} className="icon" />
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </div>
        </div>

        <div className="right-section">
          <h2>Sign in</h2>
          <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label>Password</label>
            <div className="password-input">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder ="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="password-toggle"
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
            </div>
            {errors.password && <p className="error">{errors.password}</p>}

            <div className="checkbox-container">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>

            <button type="submit" className="sign-in-btn" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign in now"}
            </button>
          </form>

          <p className="forgot-password">Lost your password?</p>
          <p className="terms">
            By clicking on "Sign in now" you agree to our <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
          </p>

          <div className="google-login">
            <h3>OR</h3>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginFailure}
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;