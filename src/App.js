import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from './context/AuthContext'
import Signup from './componets/Signup'
function App() {
  return (
    <>
    <AuthProvider>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
       <div className="w-100" style={{ maxWidth: "300px" }}>
    <Signup />
    </div>
    </Container>
    </AuthProvider>
    </>
  );
}

export default App;