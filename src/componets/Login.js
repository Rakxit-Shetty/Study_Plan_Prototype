import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    // console.log(emailRef.current.value)
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      let data = await login(emailRef.current.value, passwordRef.current.value);
      console.log(data);
      navigate("/home");
      setError(" loged in succesful");
    } catch (err) {
      console.log(err);
      setError("Failed to login");
      console.log(err);
    }
    setLoading(false);
  }
  return (
    <>
    <div className="bg-dark">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-3">log in</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <br></br>
            <Button type="submit" className="w-100" disabled={loading}>
              Log in
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">Sign up</Link>

          </div>
        </Card.Body>
      </Card>

      <footer class="text-center text-white fixed-bottom" style="background-color: #21081a;">

  <div class="container p-4"></div>

  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright:
    <a class="text-white" href="https://rakshitshetty.netlify.app">Rakshith shetty</a>
  </div>  
<div>Objective : Software Engineer Intern Assignment - StrategyCo.Global</div>
</footer>

      </div>
    </>
  );
}
