import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import Signup from './componets/Signup'
function App() {
  return (
    <>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
       <div className="w-100" style={{ maxWidth: "300px" }}>
    <Signup />
    </div>
    </Container>
    
    </>
  );
}

export default App;
