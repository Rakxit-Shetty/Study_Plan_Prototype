import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from './context/AuthContext'
import Signup from './componets/Signup'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyADUaTNwEkUQysTFefKxP7qjemKpukSFMI",
    authDomain: "study-plan-9b81f.firebaseapp.com",
    projectId: "study-plan-9b81f",
    storageBucket: "study-plan-9b81f.appspot.com",
    messagingSenderId: "1044708559391",
    appId: "1:1044708559391:web:a8c4fad867a3aab2e9232a",
    measurementId: "G-V05BVVLKCP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();

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
