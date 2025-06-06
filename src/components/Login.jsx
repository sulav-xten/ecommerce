import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoginImage from "../assets/login.gif";

const Login = () => {
  return (
    <div className="container mx-auto pt-4">
      <div className="row mb-4">
        {/*Image */}
        <div className="col-12 col-md-6 mb-4">
          <img src={LoginImage} />
        </div>
        {/*Form */}
        <div className="col-12 col-md-6 mb-4" style={{ textAlign: "justify" }}>
          <h3>Login</h3>
          <p>Please fill your details to access your account.</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <div
              style={{
                textAlign: "center",
                lineHeight: "0em",
                margin: "10px 0 20px",
                border: "1px solid #000"
              }}
            >
              <span style={{ background: "#fff", padding: "0 10px" }}>
                Or Login with
              </span>
            </div>
            <div className="d-flex justify-content-center">
              <Button variant="outline-primary" className="me-2">
                <i className="fab fa-facebook-f"></i> Facebook
              </Button>
              <Button variant="outline-danger">
                <i className="fab fa-google"></i> Google
              </Button>
            </div>
            <p className="mt-3">
              Don't have an account?{" "}
              <a href="/register" className="text-decoration-none">
                Register here
              </a>
            </p>
            <p className="mt-3">
              <a href="/forgot-password" className="text-decoration-none">
                Forgot Password?
              </a>
            </p>
            <p className="mt-3">
              By logging in, you agree to our{" "}
              <a href="/terms" className="text-decoration-none">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-decoration-none">
                Privacy Policy
              </a>.
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
