import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Card, Button, Alert, Navbar, Container } from "react-bootstrap";
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
          <h2 className="text-center mb-3">Sign in</h2>
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

     
      
      </div>
      

    </>
  );
}
